"use client";
import { useEffect } from "react";
import styles from "./diagnose.module.scss";
import Categories from "@/components/Category/Categories";
import { useCategoryContext } from "@/context/CategoryContextProvider";
export default function Diagnose() {
  const [category, setCategory] = useCategoryContext();

  useEffect(() => {}, [category]);

  return (
    <div className={styles.container}>
      {category === "" ? <>cat empty</> : <>cat filled</>}
      <Categories />
    </div>
  );
}
