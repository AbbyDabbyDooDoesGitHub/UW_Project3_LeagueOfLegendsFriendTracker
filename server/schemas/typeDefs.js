const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    Accounts: [Account]!
  }

  type Account {
    _id: ID
    gameNote: String
    gamerName: String
    createdAt: String
    friends: [Friend]!
  }

  type Friend {
    _id: ID
    friendNote: String
    friendName: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    accounts(username: String): [Account]
    account(accountId: ID!): Account
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAccount(gamerNote: String!): Account
    addFriend(accountId :ID!, friendNote: String!): Account
    removeAccount(accountId: ID!): Account
    removeFriend( friendId: ID!): Account
  }
`;

module.exports = typeDefs;
