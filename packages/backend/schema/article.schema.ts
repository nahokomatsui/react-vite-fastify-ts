import { Static, Type } from "@sinclair/typebox";

export const CreateArticleRequestBody = Type.Object({
  title: Type.String(),
  tags: Type.Optional(
    Type.Array(Type.Union([Type.Literal("hoge"), Type.Literal("fuga")]))
  ),
});

export type CreateArticleRequestBody = Static<typeof CreateArticleRequestBody>;
