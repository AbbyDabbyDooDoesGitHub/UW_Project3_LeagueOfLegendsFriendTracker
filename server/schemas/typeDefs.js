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
    friendName: String
    friendNote: String
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

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addAccount(gamerName: String!, gameNote: String!): Account
    addFriend(accountId :ID!, friendName: String!, friendNote: String!): Account
    removeAccount(accountId: ID!): Account
    removeFriend(accountId: ID!, friendId: ID!): Friend
  }
`;

module.exports = typeDefs;
