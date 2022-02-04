import useAspidaSWR from "@aspida/swr";
import { FC } from "react";
import { Link } from "rocon/react";
import { apiClient } from "../api";
import { articlesRoutes } from "../routes";
import "../styles/Articles.css";

const Articles: FC = () => {
  const { data } = useAspidaSWR(apiClient.articles);

  return (
    <div className="Articles">
      <h1>Articles</h1>
      <div className="Articles-articles">
        {data?.articles.map((article) => (
          <div key={article.id} className="Articles-article">
            <Link
              className="Articles-article-card"
              route={articlesRoutes.anyRoute}
              match={{ id: article.id }}
            >
              <div className="Articles-article-title">{article.title}</div>
              <div className="Articles-article-tags">
                {article.tags?.map((tag, index) => (
                  <div key={index} className="Articles-article-tag">
                    {tag}
                  </div>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
