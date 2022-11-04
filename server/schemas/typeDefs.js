const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth 

    addFriend(userId: ID!, friend: String!): User
    addAccount(gameNote: String!): Account
    removeUser: User
    removeFriend(friend: String!): User
    removeAccount(accountId: ID!): Account
  }
`;

module.exports = typeDefs;
