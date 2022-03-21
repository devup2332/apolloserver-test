import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typedefs";
import express from "express";
import resolvers from "./graphql/resolvers";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};
app.listen(4000, () => {
  console.log("Server graphql is running");
});

startServer();
