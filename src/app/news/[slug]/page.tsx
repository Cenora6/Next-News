import { DUMMY_NEWS } from "@/lib/dummy-news";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

interface SingleNewsPageProps {
  params: {
    slug: string;
  };
}

export default function SingleNewsPage({ params }: SingleNewsPageProps) {
  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <article className={styles["news-article"]}>
      <header>
        <img src={`/images/news/${news.image}`} alt={news.title} />
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
