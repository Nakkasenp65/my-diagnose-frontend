import styles from "./categories.module.scss";
import Category from "./Category";
import { CATEGORIES } from "@/util/data/DISEASE_INFO";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2 className={styles.header}>ประเภทโรคที่พบเจอบ่อย</h2>
      <div className={styles.lists}>
        <Category
          cat_name={CATEGORIES[0].cat_name}
          cat_description={CATEGORIES[0].cat_description}
          cat_example={CATEGORIES[0].cat_example}
        />
      </div>
    </section>
  );
}
