import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { ModalBackdrop } from "@/components/modal-backdrop/modal-backdrop";
import { getNewsItem } from "@/lib/db";

interface InterceptedImagePageProps {
  params: {
    slug: string;
  };
}

export default async function InterceptedImagePage({
  params,
}: InterceptedImagePageProps) {
  const news = await getNewsItem(params.slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className={styles.modal} open>
        <div className={styles["fullscreen-image"]}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
