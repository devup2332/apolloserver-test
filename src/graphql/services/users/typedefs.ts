import { gql } from "apollo-server-express";

const typedefs = gql`
  type User {
    id: ID
    name: String
    password: String
    address: String
    phone: String
    posts: [Post]
  }
  type Post {
    id: ID
    title: String
    content: String
    user: User
  }
  type Query {
    getUsers: [User]
    getPosts: [Post]
    getUser(id: ID): User
  }
  type Mutation {
    createUser(
      name: String
      password: String
      phone: String
      address: String
    ): User
  }
`;

export default typedefs;
