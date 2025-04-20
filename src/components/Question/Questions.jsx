import Question from "./Question";
import { RESPIRATORY_DISEASES } from "@/util/data/DISEASE_INFO";

import styles from "./questions.module.scss";

export default function Questions() {
  return (
    <div className={styles.container}>
      {RESPIRATORY_DISEASES.slice(0, 12).map((q, index) => {
        return (
          <Question
            key={`question_${index}`}
            questionTitle={q.symptom_question_th}
          />
        );
      })}
    </div>
  );
}
