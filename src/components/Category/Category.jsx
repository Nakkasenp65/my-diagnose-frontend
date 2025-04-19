"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./category.module.scss";
import { useCategoryContext } from "@/context/CategoryContextProvider";

export default function Category({ cat_name, cat_description, cat_example }) {
  const [category, setCategory] = useCategoryContext();

  function handleSetCategory() {
    setCategory(cat_name);
  }

  return (
    <div className={styles.category} onClick={handleSetCategory}>
      <div className={styles.content}>
        <h2 className={styles.name}>{cat_name}</h2>
        <p className={styles.description}>{cat_description}</p>
        <p className={styles.example}>{cat_example}</p>
      </div>
      <FaArrowRight className={styles.icon} />
    </div>
  );
}
