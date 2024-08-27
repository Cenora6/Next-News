import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getNewsItem } from "@/lib/db";

interface ImagePageProps {
  params: {
    slug: string;
  };
}

export default async function ImagePage({ params }: ImagePageProps) {
  const news = await getNewsItem(params.slug);

  if (!news) {
    notFound();
  }

  return (
    <div className={styles["fullscreen-image"]}>
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
