// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./graphql/typeDefs/index.js";
import resolvers from "./graphql/resolvers/index.js";
import * as dotenv from "dotenv";
import connect from "./helpers/db.js";
import createContext from "./context/createContext.js";

dotenv.config();

const main = async () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  connect();

  await server.start();

  app.use(
    "/",
    cors({ origin: process.env.CLIENT_DOMAIN, credentials: true }),

    bodyParser.json({ limit: "50mb" }),

    expressMiddleware(server, {
      context: async ({ req }) => await createContext(req),
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);
};

main().catch((err) => console.log(err));
