"use client";

import styles from "./modal-backdrop.module.css";
import { useRouter } from "next/navigation";

export const ModalBackdrop: React.FC = () => {
  const router = useRouter();

  return <div className={styles["modal-backdrop"]} onClick={router.back} />;
};
