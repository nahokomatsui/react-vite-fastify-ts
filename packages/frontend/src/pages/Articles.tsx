import useAspidaSWR from "@aspida/swr";
import { FC } from "react";
import { Link } from "rocon/react";
import { apiClient } from "~/api";
import { articlesRoutes } from "~/routes";
import * as styles from "~/styles/Articles.css";

const Articles: FC = () => {
  const { data } = useAspidaSWR(apiClient.articles);

  return (
    <div>
      <h1>Articles</h1>
      <div className={styles.articles}>
        {data?.articles.map((article) => (
          <div key={article.id} className={styles.article}>
            <Link
              className={styles.articleCard}
              route={articlesRoutes.anyRoute}
              match={{ id: article.id }}
            >
              <div className={styles.articleTitle}>{article.title}</div>
              <div className={styles.articleTags}>
                {article.tags?.map((tag, index) => (
                  <div key={index} className={styles.articleTag}>
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
