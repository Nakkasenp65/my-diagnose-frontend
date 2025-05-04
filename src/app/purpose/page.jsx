import styles from "./purpose.module.scss";
export default function Purpose() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>วัตถุประสงค์ของโครงการ</h1>
        <br />
        <p>
          ทดลองใช้โมเดล AI ในการพยากรณ์โรคของผู้ป่วย
          โดยเริ่มทดสอบจากโรคทางเดินหายใจ โดยใช้ข้อมูลจาก Kaggle
          ที่มีการระบุโรคและอาการเอาไว้
        </p>
      </div>
    </div>
  );
}
