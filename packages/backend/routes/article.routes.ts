import { FastifyPluginAsync } from "fastify";
import {
  CreateArticleRequestBody,
  GetArticleRequestParams,
  GetArticleResponseBody,
  GetArticlesResponseBody,
} from "~/schema/article.schema";
import {
  createArticle,
  getArticle,
  getArticles,
} from "~/services/article.service";
import { methods } from "~/utils/methods";

const routes: FastifyPluginAsync = async (app) => {
  const { get, post } = methods(app);

  get("/articles", { response: GetArticlesResponseBody }, async () => {
    return await getArticles();
  });

  get(
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

  post(
    "/articles",
    { request: { body: CreateArticleRequestBody } },
    async (request) => {
      const { body } = request;
      await createArticle(body);
    }
  );
};

export default routes;
