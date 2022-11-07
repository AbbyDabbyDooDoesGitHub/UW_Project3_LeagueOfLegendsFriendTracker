import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ACCOUNT = gql`
  mutation addAccount($gamerName: String!, $gameNote: string!) {
    addAccount(gamerName: $gamerName, gameNote: $gameNote) {
      _id
      gamerName
      gameNote
    author
      createdAt
      friends {
        _id
        friendName
        friendNote
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($accountId: ID!, $friendName: String!, $friendNote: String!) {
    addFriend(accountId: $accountId, friendName: $friendName, friendNote: $friendNote) {
      _id
      gamerName
      gameNote
    author
      createdAt
      friends {
        _id
        friendName
        friendNote
        createdAt
      }
    }
  }
`;
