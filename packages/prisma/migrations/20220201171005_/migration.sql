-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('hoge', 'fuga');

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tags" "Tag"[],

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Article_tags_idx" ON "Article"("tags");
