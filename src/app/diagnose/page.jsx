"use client";
import styles from "./diagnose.module.scss";
import { useCategoryContext } from "@/context/CategoryContextProvider";
import Category from "@/components/Category/Category";
import { CATEGORIES } from "@/util/data/DISEASE_INFO";
import SymptomForm from "@/components/SymptomForm/SymptomForm";
import AnimateIn from "@/components/AnimateIn";
import FormHead from "@/components/SymptomForm/FormHead";

export default function Diagnose() {
  const [category, setCategory] = useCategoryContext();

  return (
    <AnimateIn>
      <div className={styles.container}>
        <FormHead />
        <div className={styles.categories}>
          {category === "" && (
            // CATEGORIES.map((category, index) => (
            //   <Category
            //     key={`category_${index}`}
            //     cat_name={category.cat_name}
            //     cat_description={category.cat_description}
            //     cat_example={category.cat_example}
            //   />
            // ))
            <Category
              cat_name={CATEGORIES[3].cat_name}
              cat_description={CATEGORIES[3].cat_description}
              cat_example={CATEGORIES[3].cat_example}
            />
          )}
        </div>
        {category !== "" && <SymptomForm />}
      </div>
    </AnimateIn>
  );
}
