import styles from "./categories.module.scss";
import Category from "./Category";
import { CATEGORIES } from "@/util/data/DISEASE_INFO";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2 className={styles.header}>ประเภทโรคที่พบเจอบ่อย</h2>
      <div className={styles.lists}>
        {CATEGORIES.map((category) => (
          <Category
            cat_name={category.cat_name}
            cat_description={category.cat_description}
            cat_example={category.cat_example}
          />
        ))}
      </div>
    </section>
  );
}
