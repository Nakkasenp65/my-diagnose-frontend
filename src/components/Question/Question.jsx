"use client";
import React, { useState } from "react";
import styles from "./question.module.scss";
import FramerButton from "../FramerButton/FramerButton";

export default function Question({ questionTitle }) {
  const options = [
    { id: 0, label: "มีอาการ" },
    { id: 1, label: "มีบ้าง ไม่แน่ใจ" },
    { id: 2, label: "ไม่มีเลย" },
  ];
  const [selected, setSelected] = useState(null);

  const handleSelected = (id) => {
    if (id === selected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return (
    <div className={styles.questionBox}>
      <h3 className={styles.title}>{questionTitle}</h3>
      <div className={styles.buttons}>
        {options.map((opt) => (
          <FramerButton
            key={opt.id}
            active={selected === opt.id}
            onClick={() => handleSelected(opt.id)}
          >
            {opt.label}
          </FramerButton>
        ))}
      </div>
    </div>
  );
}
