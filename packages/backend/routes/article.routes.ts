import { FastifyPluginAsync } from "fastify";
import {
  CreateArticleRequestBody,
  GetArticleRequestParams,
  GetArticleResponseBody,
  GetArticlesResponseBody,
} from "../schema/article.schema";
import {
  createArticle,
  getArticle,
  getArticles,
} from "../services/article.service";
import { route } from "../utils/route";

const routes: FastifyPluginAsync = async (app) => {
  route(
    app,
    "get",
    "/articles",
    { response: GetArticlesResponseBody },
    async () => {
      return await getArticles();
    }
  );

  route(
    app,
    "get",
    "/articles/:id",
    {
      request: { params: GetArticleRequestParams },
      response: GetArticleResponseBody,
    },
    async ({ params }) => {
      const { id } = params;
      const article = await getArticle(id);
      if (!article) {
        throw new Error(`article for id:${id} not found.`);
      }
      return article;
    }
  );

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
