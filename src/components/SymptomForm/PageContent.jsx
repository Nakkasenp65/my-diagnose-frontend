import { RESPIRATORY_DISEASES } from "@/util/data/DISEASE_INFO";
import Question from "../Question/Question";
import styles from "./pageContent.module.scss";

export default function PageContent({ page, formData, onSymptomChange }) {
  let questions = [];

  if (page === 1) {
    questions = RESPIRATORY_DISEASES.slice(0, 10); // yes/no
  } else if (page === 2) {
    questions = RESPIRATORY_DISEASES.slice(10, 18); // checkbox
  } else if (page === 3) {
    questions = RESPIRATORY_DISEASES.slice(18, 22); // checkbox
  }

  return (
    <div className={styles.pageContent}>
      {questions.map((q) => (
        <Question
          key={q.id}
          questionTitle={`${q.id + 1}. ` + q.symptom_question_th}
          selected={formData[q.symptom_value] ?? false}
          qType={page === 1 ? "yes_no" : "checkbox"}
          onSelect={(value) => onSymptomChange(q.symptom_value, value)}
        />
      ))}
    </div>
  );
}
