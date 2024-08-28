import styles from "./layout.module.css";

interface ArchiveLayoutProps {
  archive: string;
  latest: string;
}

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <div id="archive">
      <h1>News Archive</h1>
      <section className={styles["archive-filter"]}>{archive}</section>
      <section>{latest}</section>
    </div>
  );
}
