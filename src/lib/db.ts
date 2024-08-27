import sql from "better-sqlite3";
import { SingleNews } from "@/models/News";

const db = sql("data.db");

export async function getAllNews(): Promise<SingleNews[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM news").all() as SingleNews[];
}

export async function getNewsItem(slug: string): Promise<SingleNews> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as SingleNews;
}

export async function getLatestNews(): Promise<SingleNews[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as SingleNews[];
}

export async function getAvailableNewsYears(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: string }[];

  return years.map((year) => year.year);
}

export function getAvailableNewsMonths(year: string): string[] {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year) as { month: string }[];

  return months.map((month) => month.month);
}

export async function getNewsForYear(year: string): Promise<SingleNews[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year) as SingleNews[];
}

export async function getNewsForYearAndMonth(
  year: string,
  month: string,
): Promise<SingleNews[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month) as SingleNews[];
}
