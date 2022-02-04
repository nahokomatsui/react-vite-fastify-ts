import { prismaMock } from "../mocks/prisma";
import { createArticle } from "~/services/article.service";

describe("articleService", () => {
  describe("createArticle", () => {
    test("successfully creates article", async () => {
      const injectedService = createArticle.inject({
        prisma: prismaMock,
      });

      await expect(
        injectedService({
          title: "title",
          tags: ["hoge"],
        })
      ).resolves.not.toThrow();
      expect(prismaMock.article.create).toBeCalledTimes(1);
    });
  });
});
