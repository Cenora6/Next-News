import styles from "./page.module.css";
import Link from "next/link";
import { DUMMY_NEWS } from "@/lib/dummy-news";
import { SingleNews } from "@/models/News";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className={styles["news-list"]}>
        {DUMMY_NEWS.map((news: SingleNews) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
