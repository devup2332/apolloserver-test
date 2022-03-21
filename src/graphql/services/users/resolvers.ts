import { users } from "../../../db";
import { posts } from "../../../db";
import { Post, User } from "../../../models/post";

const resolvers = {
  Query: {
    getUsers() {
      return users;
    },
    getPosts() {
      return posts;
    },
    getUser(_: any, { id }: any) {
      return users.find((p) => {
        return p.id == id;
      });
    },
  },
  Mutation: {
    createUser(_: any, { name, password, phone, address }: any) {
      const newUser = {
        id: users.length + 1,
        name,
        password,
        phone,
        address,
      };
      users.push(newUser);
      return newUser;
    },
  },

  Post: {
    user(parent: Post, params: any, datasources: any, info: any) {
      const r = users.find((u) => {
        return parent.user == u.id;
      });

      return r;
    },
  },
  User: {
    posts(parent: User) {
      const r = posts.filter((post) => {
        return post.user === parent.id;
      });
      return r;
    },
  },
};

export default resolvers;
