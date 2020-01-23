import gql from 'graphql-tag';

export const GET_ALL_MESSAGES_WITH_USERS = gql`
  query {
    messages(order: "DESC") @connection(key: "MessagesConnection") {
      edges {
        id
        createdAt
        user {
          id
          username
          name
          avatar {
            path
          }
        }
        file {
          path
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export const GET_PAGINATED_MESSAGES_WITH_USERS = gql`
  query($cursor: String, $limit: Int!) {
    messages(cursor: $cursor, limit: $limit)
      @connection(key: "MessagesConnection") {
      edges {
        id
        createdAt
        user {
          id
          username
          name
          avatar {
            path
          }
        }
        file {
          path
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      username
      name
      bio
      avatar {
        id
        path
      }
      cover {
        id
        path
      }
    }
  }
`;

export const GET_USER = gql`
  query($username: String!) {
    user(username: $username) {
      id
      username
      name
      bio
      avatar {
        id
        path
      }
      cover {
        id
        path
      }
    }
  }
`;

export const GET_AUTOPLAY = gql`
  query {
    autoplay @client {
      direction
      createdAt
      duration
    }
  }
`;
