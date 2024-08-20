import { DUMMY_NEWS } from "@/lib/dummy-news";
import { notFound } from "next/navigation";

interface ImagePageProps {
  params: {
    slug: string;
  };
}

export default function ImagePage({ params }: ImagePageProps) {
  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);

  if (!news) {
    notFound();
  }

  return (
    <div className={"fullscreen-image"}>
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
