import styles from "./hero.module.scss";
import Image from "next/image";
import doc from "../../../public/images/doc.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>AI SYMPTOM PREDICTION</h1>
      <p className={styles.welcome}>
        Diagnose the symptom to predict the health result with tested naive
        bayes model that has over 90% accuracy
      </p>
      <div className={styles.buttonGroup}>
        <a className={styles.start} href="/diagnose">
          เริ่มเลย
        </a>
        <a className={styles.model} href="/aboutModel">
          เกี่ยวกับโมเดล
        </a>
      </div>
      <Image
        priority={true}
        className={styles.doctor}
        src={doc}
        alt="doctor-illustrator"
      />
    </section>
  );
}
