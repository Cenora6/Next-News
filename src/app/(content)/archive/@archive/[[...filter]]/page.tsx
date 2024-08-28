import { NewsList } from "@/components/news-list/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/db";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./page.module.css";

interface FilteredNewsPageProps {
  params: {
    filter?: string[];
  };
}

export default async function FilteredNewsPage({
  params,
}: FilteredNewsPageProps) {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  return (
    <Suspense fallback={<p>Loading news...</p>}>
      <FilterHeader year={selectedYear} month={selectedMonth} />
      <FilteredNews year={selectedYear} month={selectedMonth} />
    </Suspense>
  );
}

interface FilteredNewsProps {
  year?: string;
  month?: string;
}

async function FilteredNews({ year, month }: FilteredNewsProps) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

interface FilterHeaderProps {
  year?: string;
  month?: string;
}

async function FilterHeader({ year, month }: FilterHeaderProps) {
  const availableYears = await getAvailableNewsYears();
  let links = await getAvailableNewsYears();

  if (
    (year && !availableYears.includes(year)) ||
    (year && month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header>
      <nav>
        <ul className={styles["archive-header-list"]}>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link} className={styles["archive-header-list-element"]}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
