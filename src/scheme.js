const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Comment {
    user: String!
    email: String!
    comment: String
    calification: Int!
    date: String!
  }

  type Query {
    comments: [Comment]
  }

  type Mutation {
    addComment(user: String!, email: String!, comment: String, calification: Int!, date: String!): Comment
  }
`;

module.exports = typeDefs;
