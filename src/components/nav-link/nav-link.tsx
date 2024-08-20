import Link from "next/link";
import styles from "./nav-link.module.css";

export const NavLink: React.FC<NavLinkProps> = ({ url, text }) => {
  return (
    <Link className={styles.link} href={url}>
      {text}
    </Link>
  );
};

export interface NavLinkProps {
  url: string;
  text: string;
}
