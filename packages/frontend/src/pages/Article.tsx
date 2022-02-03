import useAspidaSWR from "@aspida/swr";
import { FC } from "react";
import { apiClient } from "../api";
import "../styles/Article.css";

type Props = {
  id: string;
};

const Article: FC<Props> = ({ id }) => {
  const { data: article } = useAspidaSWR(apiClient.articles._id(id));

  return (
    <div className="Article-article">
      <h1>Article</h1>
      {article ? (
        <>
          <div className="Article-article-title">{article.title}</div>
          <div className="Article-article-tags">
            {article.tags?.map((tag, index) => (
              <div key={index} className="Article-article-tag">
                {tag}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Article;
