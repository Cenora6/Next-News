"use client";

import { DUMMY_NEWS } from "@/lib/dummy-news";
import { notFound, useRouter } from "next/navigation";
import styles from "./page.module.css";

interface InterceptedImagePageProps {
  params: {
    slug: string;
  };
}

export default function InterceptedImagePage({
  params,
}: InterceptedImagePageProps) {
  const router = useRouter();

  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <div className={styles["modal-backdrop"]} onClick={router.back} />
      <dialog className={styles.modal} open>
        <div className={styles["fullscreen-image"]}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
