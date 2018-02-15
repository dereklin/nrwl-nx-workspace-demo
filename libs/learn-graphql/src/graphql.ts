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
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

export interface CreateLinkMutationResponse {
  createLink: Link;
  loading: boolean;
}

// export const CREATE_USER_MUTATION = gql`
//   mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
//     createUser(
//       name: $name,
//       authProvider: {
//         email: {
//           email: $email,
//           password: $password
//         }
//       }
//     ) {
//       id
//     }

//     signinUser(email: {
//       email: $email,
//       password: $password
//     }) {
//       token
//       user {
//         id
//       }
//     }
//   }
// `;
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
