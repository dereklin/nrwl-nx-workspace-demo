import { Link, User } from './types';
// 1
import gql from 'graphql-tag';

// 2
export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
`;

// 3
export interface AllLinkQueryResponse {
  allLinks: Link[];
  loading: boolean;
}

// 1
export const CREATE_LINK_MUTATION = gql`
  # 2
  mutation CreateLinkMutation($description: String!, $url: String!, $postedById: ID!) {
    createLink(description: $description, url: $url, postedById: $postedById) {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
    }
  }
`;

export interface CreateLinkMutationResponse {
  createLink: Link;
  loading: boolean;
}

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
    signupUser(name: $name, email: $email, password: $password) {
      id
    }

    authenticateUser(email: $email, password: $password) {
      token
      id
    }
  }
`;

export interface CreateUserMutationResponse {
  loading: boolean;
  createUser: User;
  signinUser: {
    token: string;
    user?: User;
  };
}

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
      id
    }
  }
`;

export interface CreateUserMutationResponse {
  loading: boolean;
  signinUser: {
    token: string;
    user?: User;
  };
}

export const CREATE_VOTE_MUTATION = gql`
  mutation CreateVoteMutation($userId: ID!, $linkId: ID!) {
    createVote(userId: $userId, linkId: $linkId) {
      id
      link {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

export interface CreateVoteMutationResponse {
  loading: boolean;
  createVote: {
    id: string;
    link: Link;
    user: User;
  };
}

export const ALL_LINKS_SEARCH_QUERY = gql`
  query AllLinksSearchQuery($searchText: String!) {
    allLinks(filter: {
      OR: [{
        url_contains: $searchText
      }, {
        description_contains: $searchText
      }]
    }) {
      id
      url
      description
      createdAt
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
`;

export interface AllLinksSearchQueryResponse {
  loading: boolean;
  allLinks: Link[];
}
