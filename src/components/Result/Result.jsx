"use client";
import FramerButton from "../FramerButton/FramerButton";
import styles from "./result.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimateIn from "../AnimateIn";

function Result({ result, handleReset }) {
  const { disease, confidence, symptoms_provided } = result;
  const [remaining, setRemaining] = useState(15);
  const [isCounting, setIsCounting] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    } else if (remaining === 0) {
      setIsCounting(false);
    }
    return () => clearInterval(interval);
  }, [isCounting, remaining]);

  return (
    <AnimateIn>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <h1 className={styles.diseaseName}> 📊ผลลัพธ์: {disease} </h1>
            <div className={styles.accuracy}>
              <div className={styles.confidence}>
                ความแม่นยำ {(confidence * 100).toFixed(2)}%
              </div>
              <div className={styles.subInfo}>
                จากทั้งหมด <strong>42</strong> โรค
              </div>
            </div>
          </div>

          <div className={styles.cardMiddle}>
            <div className={styles.symptomLabel}>อาการที่ระบุ:</div>
            <div className={styles.symptoms}>
              {symptoms_provided.join(", ")}
            </div>
          </div>

          <div className={styles.cardBottom}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // ease: "easeInOut"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={styles.accurateTag}
              onClick={() => setIsLiked(!isLiked)}
            >
              <span className={styles.heartIcon} role="img" aria-label="heart">
                {isLiked ? <FaHeart /> : <FaRegHeart />}
              </span>{" "}
              Accurate
            </motion.div>
            <FramerButton onClick={handleReset} disabled={isCounting}>
              ลองอีกครั้ง {isCounting ? `(${remaining})` : ""}
            </FramerButton>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

export default Result;
