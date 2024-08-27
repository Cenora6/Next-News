import { NewsList } from "@/components/news-list/news-list";
import { getLatestNews } from "@/lib/db";

export default async function LatestNews() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}
