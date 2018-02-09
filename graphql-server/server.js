// https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035
/*
Usage:
query FortuneCookieQuery {
  getFortuneCookie
}

query {
  author(firstName:"Edmond", lastName: "Jones"){
    firstName
    lastName
    posts{
      title
      views
    }
  }
}

https://engine.apollographql.com/account/gh.dereklin


*/
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import compression from 'compression';
import { Engine } from 'apollo-engine';

const GRAPHQL_PORT = 5000;
const ENGINE_API_KEY = process.env.APOLLO_ENGINE_API_KEY;

const engine = new Engine({
  engineConfig: {
    apiKey: ENGINE_API_KEY,
    stores: [
      {
        name: 'inMemEmbeddedCache',
        inMemory: {
          cacheSize: 20971520 // 20 MB
        }
      }
    ],
    queryCache: {
      publicFullQueryStore: 'inMemEmbeddedCache'
    }
  },
  graphqlPort: GRAPHQL_PORT
});
engine.start();

const graphQLServer = express();
graphQLServer.use(engine.expressMiddleware());
graphQLServer.use(compression());

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress(
  {
    schema,
    tracing: true,
    cacheControl: true
  }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
