"use client";

import { NewsList } from "@/components/news-list/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("Something went wrong!");
        setIsLoading(false);
      }
      const data = await response.json();
      setIsLoading(false);
      setNews(data);
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
