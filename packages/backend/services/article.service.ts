import { depend } from "velona";
import type { CreateArticleRequestBody } from "../schema/article.schema";
import { prisma } from "../utils/prisma";

export const createArticle = depend(
  { prisma },
  async ({ prisma }, body: CreateArticleRequestBody) => {
    await prisma.article.create({
      data: body,
    });
  }
);

export const getArticles = depend({ prisma }, async ({ prisma }) => {
  return {
    articles: await prisma.article.findMany(),
  };
});

export const getArticle = depend({ prisma }, async ({ prisma }, id: string) => {
  const article = await prisma.article.findUnique({
    where: {
      id,
    },
  });
  return article ?? undefined;
});
