import styles from "./categories.module.scss";
import Box from "../Box/Box";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2 className={styles.header}>ประเภทโรคที่พบเจอบ่อย</h2>
      <div className={styles.lists}>
        <Box title={"โรคผิวหนัง"} description={"อาการอักเสบ หรือแพ้ตามผิว"} />
        <Box
          title={"โรคทางเดินหายใจ"}
          description={"อาการหายใจไม่สะดวก หรือมีอาการไอ"}
        />
        <Box
          title={"โรคหลอดเลือด"}
          description={"อาการหายใจไม่สะดวก หรือมึน หมอง เป็นลม"}
        />
      </div>
    </section>
  );
}
