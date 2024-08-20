import styles from "./news-list.module.css";
import { SingleNews } from "@/models/News";
import Link from "next/link";

interface NewsListProps {
  news: SingleNews[];
}

export const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <ul className={styles["news-list"]}>
      {news.map((news: SingleNews) => (
        <li key={news.id}>
          <Link href={`/news/${news.slug}`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
