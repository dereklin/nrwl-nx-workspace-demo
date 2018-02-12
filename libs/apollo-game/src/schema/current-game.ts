import gql from 'graphql-tag';

const defaultState = {
  currentGame: {
    __typename: 'currentGame',
    teamAScore: 0,
    teamBScore: 0,
    teamAName: 'Team A',
    teamBName: 'Team B'
  }
};

export const currentGame = {
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateGame: (_, { index, value }, { cache }) => {
        const query = gql`
          query GetCurrentGame {
            currentGame @client {
              teamAScore
              teamBScore
              teamAName
              teamBName
            }
          }
        `;
        const previous = cache.readQuery({ query });
        const data = {
          currentGame: {
            ...previous.currentGame,
            [index]: value
          }
        };

        cache.writeQuery({ query, data });
      },
      resetCurrentGame: (_, d, { myCache }) => {
        myCache.writeData({ defaultState });
      }
    }
  }
};
