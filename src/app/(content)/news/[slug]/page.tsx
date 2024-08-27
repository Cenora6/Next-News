import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/db";

interface SingleNewsPageProps {
  params: {
    slug: string;
  };
}

export default async function SingleNewsPage({ params }: SingleNewsPageProps) {
  const news = await getNewsItem(params.slug);

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
