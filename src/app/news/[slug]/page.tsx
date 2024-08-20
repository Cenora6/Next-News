import { DUMMY_NEWS } from "@/lib/dummy-news";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";

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
        <Link href={`/news/${news.slug}/image`}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
