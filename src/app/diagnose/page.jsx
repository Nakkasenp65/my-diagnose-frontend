"use client";
import { useState } from "react";
import styles from "./diagnose.module.scss";
import { useCategoryContext } from "@/context/CategoryContextProvider";
import Category from "@/components/Category/Category";
import { FaArrowLeft } from "react-icons/fa";
import { CATEGORIES } from "@/util/data/DISEASE_INFO";
export default function Diagnose() {
  const [category, setCategory] = useCategoryContext();
  const [formFilled, setFormFilled] = useState(false);
  const FORM_STATE = ["หมวดหมู่โรค", "อาการ", "ยืนยัน"];

  return (
    <div className={styles.container}>
      <div className={styles.formHead}>
        {category !== "" && (
          <button className={styles.formBack} onClick={() => setCategory("")}>
            <FaArrowLeft />
          </button>
        )}
        {category === "" ? (
          <h1>{FORM_STATE[0]}</h1>
        ) : { formFilled } ? (
          <h1>{FORM_STATE[1]}</h1>
        ) : (
          <>
            <h1>{FORM_STATE[2]}</h1>
          </>
        )}
      </div>
      <div className={styles.categories}>
        {category === "" &&
          CATEGORIES.map((category, index) => (
            <Category
              key={`category_${index}`}
              cat_name={category.cat_name}
              cat_description={category.cat_description}
              cat_example={category.cat_example}
            />
          ))}
      </div>
    </div>
  );
}
