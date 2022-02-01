import { Static, Type } from "@sinclair/typebox";

export const CreateArticleBodyRequest = Type.Object({
  id: Type.String(),
  title: Type.String(),
  tags: Type.Optional(
    Type.Array(Type.Union([Type.Literal("hoge"), Type.Literal("fuga")]))
  ),
});

export type CreateArticleBodyRequest = Static<typeof CreateArticleBodyRequest>;
