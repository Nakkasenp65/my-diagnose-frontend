import styles from "./categories.module.scss";
import Category from "./Category";
import { CATEGORIES } from "@/util/data/DISEASE_INFO";

export default function Categories() {
  return (
    <div className={styles.categories}>
      <h2 className={styles.header}>ประเภทโรคที่พบเจอบ่อย</h2>
      <div className={styles.lists}>
        {CATEGORIES.slice(0, 6).map((category, index) => (
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
