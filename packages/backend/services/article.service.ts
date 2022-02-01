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
