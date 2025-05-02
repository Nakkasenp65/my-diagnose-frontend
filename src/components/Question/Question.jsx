"use client";
import React, { useState } from "react";
import styles from "./question.module.scss";
import FramerButton from "../FramerButton/FramerButton";
import FramerCheckbox from "../FramerButton/FramerCheckbox";

export default function Question({
  questionTitle,
  qType = "yes_no",
  selected,
  onSelect,
}) {
  const options = [
    { id: 0, label: "มีอาการ" },
    { id: 1, label: "มีบ้าง ไม่แน่ใจ" },
    { id: 2, label: "ไม่มีเลย" },
  ];

  const handleYesNoSelect = (id) => {
    if (selected === id) {
      onSelect(null); // deselect
    } else {
      onSelect(id);
    }
  };

  if (qType === "yes_no") {
    return (
      <div className={styles.questionBox}>
        <h3 className={styles.title}>{questionTitle}</h3>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FramerButton
              key={option.id}
              active={selected === option.id}
              onClick={() => handleYesNoSelect(option.id)}
            >
              {option.label}
            </FramerButton>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.questionCheckbox}>
        <h3 className={styles.title}>{questionTitle}</h3>
        <FramerCheckbox
          active={selected === true}
          onChange={(checked) => onSelect(checked)}
        />
      </div>
    );
  }
}
