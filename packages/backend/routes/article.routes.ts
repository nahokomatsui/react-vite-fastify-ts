import { FastifyPluginAsync } from "fastify";
import { CreateArticleRequestBody } from "../schema/article.schema";
import { createArticle } from "../services/article.service";
import { route } from "../utils/route";

const routes: FastifyPluginAsync = async (app) => {
  route(
    app,
    "post",
    "/articles",
    { request: { body: CreateArticleRequestBody } },
    async (request) => {
      const { body } = request;
      await createArticle(body);
    }
  );
};

export default routes;
