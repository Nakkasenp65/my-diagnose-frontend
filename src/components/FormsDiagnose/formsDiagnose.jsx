"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./formsDiagnose.module.scss";

const questionsPage1 = [
  { id: 1, text: "Do you enjoy working in teams?", type: "boolean" },
  { id: 2, text: "Are you comfortable with public speaking?", type: "boolean" },
  { id: 3, text: "Do you like solving logical problems?", type: "boolean" },
  { id: 4, text: "Choose your preferred work style:", type: "dropdown", options: ["Test1", "Test2", "Test3"] }
];

const questionsPage2 = [
  { id: 5, text: "Do you enjoy learning new technologies?", type: "boolean" },
  { id: 6, text: "Are you detail-oriented?", type: "boolean" },
  { id: 7, text: "Do you prefer structured environments?", type: "boolean" },
  { id: 8, text: "Are you a creative thinker?", type: "boolean" },
  { id: 9, text: "Do you enjoy helping others?", type: "boolean" },
  { id: 10, text: "Do you work well under pressure?", type: "boolean" },
  { id: 11, text: "Do you like to take initiative?", type: "boolean" },
  { id: 12, text: "Do you adapt well to change?", type: "boolean" },
  { id: 13, text: "Do you enjoy planning and organizing?", type: "boolean" },
  { id: 14, text: "Are you comfortable making decisions?", type: "boolean" },
  { id: 15, text: "Preferred project type:", type: "dropdown", options: ["Solo", "Team", "Flexible"] },
  { id: 16, text: "Preferred work environment:", type: "dropdown", options: ["Remote", "On-site", "Hybrid"] },
  { id: 17, text: "Preferred leadership style:", type: "dropdown", options: ["Supportive", "Directive", "Collaborative"] }
];

export default function FormsDiagnose() {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const allQuestions = [...questionsPage1, ...questionsPage2];

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleConfirm = () => {
    const unanswered = allQuestions.filter((q) => answers[q.id] === undefined);
    if (unanswered.length > 0) {
      setShowAlert(true);
      return;
    }
    setShowPopup(true);
  };

  const handleDone = () => {
    setShowPopup(false);
    router.push("/");
  };

  const questions = page === 1 ? questionsPage1 : questionsPage2;
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;
  const percent = Math.round((answeredCount / questions.length) * 100);


  return (
    <div className={styles.container}> 
      <div className={styles.formBox}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${percent}%` }}></div>
        </div>

        {questions.map((q) => (
          <div className={styles.questionBlock} key={q.id}>
            <p className={styles.questionText}>{q.text}</p>
            {q.type === "boolean" ? (
              <div className={styles.choiceRow}>
                <button
                  className={`${styles.choiceButton} ${styles.yesButton} ${answers[q.id] === true ? styles.selected : ""}`}
                  onClick={() => handleAnswer(q.id, true)}
                >
                  Yes
                </button>
                <button
                  className={`${styles.choiceButton} ${styles.noButton} ${answers[q.id] === false ? styles.selected : ""}`}
                  onClick={() => handleAnswer(q.id, false)}
                >
                  No
                </button>
              </div>
            ) : (
              <select
                className={styles.dropdown}
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
              >
                <option value="" disabled>
                  -- Select an option --
                </option>
                {q.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <div className={styles.navButtons}>
          {page === 2 && (
            <button className={styles.nextButton} onClick={() => setPage(1)}>
              ⬅️ Back
            </button>
          )}
          {page === 1 ? (
            <button className={styles.nextButton} onClick={() => setPage(2)}>
              Next ➡️
            </button>
          ) : (
            <button className={styles.confirmButton} onClick={handleConfirm}>
              Confirm ✅
            </button>
          )}
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <h2>✅ Success!</h2>
            <p>Your answers have been submitted.</p>
            <button className={styles.doneButton} onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      )}

      {showAlert && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <h2>⚠️ Incomplete</h2>
            <p>Please answer all questions before confirming.</p>
            <button className={styles.doneButton} onClick={() => setShowAlert(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
