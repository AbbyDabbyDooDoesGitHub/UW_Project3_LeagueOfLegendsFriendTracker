import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      accounts {
        _id
        gamerName
        gameNote
        createdAt
      }
    }
  }
`;

export const QUERY_ACCOUNTS = gql`
  query getAccounts {
    accounts {
      _id
      
      gamerName
      gameNote
      createdAt
    }
  }
`;

export const QUERY_SINGLE_ACCOUNT = gql`
  query getSingleAccount($accountId: ID!) {
    account(accountId: $accountId) {
      _id
      
      gamerName
      gameNote
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      accounts {
        _id
        
        gamerName
        gameNote
        createdAt
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
