"use client";

import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export const NavLink: React.FC<NavLinkProps> = ({ url, children }) => {
  const path = usePathname();

  return (
    <Link
      className={
        path.startsWith(url) ? `${styles.link} ${styles.active}` : styles.link
      }
      href={url}
    >
      {children}
    </Link>
  );
};

export interface NavLinkProps {
  url: string;
  children: React.ReactNode;
}
