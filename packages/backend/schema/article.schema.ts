import { Static, Type } from "@sinclair/typebox";

const Article = Type.Object({
  id: Type.String(),
  title: Type.String(),
  tags: Type.Optional(
    Type.Array(Type.Union([Type.Literal("hoge"), Type.Literal("fuga")]))
  ),
});

export const GetArticlesResponseBody = Type.Object({
  articles: Type.Array(Article),
});
export type GetArticlesResponseBody = Static<typeof GetArticlesResponseBody>;

export const GetArticleRequestParams = Type.Object({
  id: Type.String(),
});
export type GetArticleRequestParams = Static<typeof GetArticleRequestParams>;
export const GetArticleResponseBody = Article;
export type GetArticleResponseBody = Static<typeof GetArticleResponseBody>;

export const CreateArticleRequestBody = Type.Pick(Article, ["title", "tags"]);
export type CreateArticleRequestBody = Static<typeof CreateArticleRequestBody>;
