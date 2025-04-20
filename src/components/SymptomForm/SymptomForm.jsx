"use client";
import styles from "./symptomForm.module.scss";
import Questions from "../Question/Questions";
export default function SymptomForm() {
  return (
    <div className={styles.container}>
      <Questions />
    </div>
  );
}
