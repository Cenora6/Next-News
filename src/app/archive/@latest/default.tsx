import { getLatestNews } from "@/utils/news";
import { NewsList } from "@/components/news-list/news-list";

export default function LatestNews() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
