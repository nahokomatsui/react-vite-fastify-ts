import useAspidaSWR from "@aspida/swr";
import { FC } from "react";
import { apiClient } from "~/api";
import * as styles from "~/styles/Article.css";

type Props = {
  id: string;
};

const Article: FC<Props> = ({ id }) => {
  const { data: article } = useAspidaSWR(apiClient.articles._id(id));

  return (
    <div className={styles.root}>
      <h1>Article</h1>
      {article ? (
        <>
          <div className={styles.title}>{article.title}</div>
          <div className={styles.tags}>
            {article.tags?.map((tag, index) => (
              <div key={index} className={styles.tag}>
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
