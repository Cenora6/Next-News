import { DUMMY_NEWS } from "@/lib/dummy-news";
import { SingleNews } from "@/models/News";

export const getAllNews = (): SingleNews[] => DUMMY_NEWS;

export const getLatestNews = (): SingleNews[] => DUMMY_NEWS.slice(0, 3);

export const getAvailableNewsYears = (): number[] => {
  return DUMMY_NEWS.reduce<number[]>((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
};

export const getAvailableNewsMonths = (year: string): number[] => {
  return DUMMY_NEWS.reduce<number[]>((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
};

export const getNewsForYear = (year: string): SingleNews[] =>
  DUMMY_NEWS.filter((news) => new Date(news.date).getFullYear() === +year);

export const getNewsForYearAndMonth = (
  year: string,
  month: string,
): SingleNews[] => {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
};
