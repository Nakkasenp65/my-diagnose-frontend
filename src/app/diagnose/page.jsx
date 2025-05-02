"use client";
import styles from "./diagnose.module.scss";
import Category from "@/components/Category/Category";
import { CATEGORIES } from "@/util/data/DISEASE_INFO";
import SymptomForm from "@/components/SymptomForm/SymptomForm";
import AnimateIn from "@/components/AnimateIn";
import FormHead from "@/components/SymptomForm/FormHead";
import { useState } from "react";

export default function Diagnose() {
  const [category, setCategory] = useState("");
  const [formFilled, setFormFilled] = useState(false);

  return (
    <AnimateIn>
      <div className={styles.container}>
        {/* Form Head navigating category and symptom */}
        <FormHead
          category={category}
          setCategory={setCategory}
          setFormFilled={setFormFilled}
          formFilled={formFilled}
        />
        <div className={styles.categories}>
          {/* Testing one category: RESPIRATORY_DISEASES*/}
          {category === "" && (
            <Category
              cat_name={CATEGORIES[3].cat_name}
              cat_description={CATEGORIES[3].cat_description}
              cat_example={CATEGORIES[3].cat_example}
              setCategory={setCategory}
            />
          )}
        </div>
        {/* Form part */}
        {category !== "" && <SymptomForm setFormFilled={setFormFilled} />}
      </div>
    </AnimateIn>
  );
}
