import { FastifyPluginAsync } from "fastify";
import { CreateArticleBodyRequest } from "../schema/article.schema";
import { route } from "../utils/route";

const routes: FastifyPluginAsync = async (app) => {
  route(
    app,
    "post",
    "/articles",
    { request: { body: CreateArticleBodyRequest } },
    async (request) => {
      const { body } = request;
      console.log(body);
      console.log(body.tags?.includes("fuga"));
    }
  );
};

export default routes;
