"use client";
import styles from "./stepIndicator.module.scss";
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
};

function StepIndicator({ step, setStep }) {
  const [isSelectShown, setIsSelectShown] = useState(false);

  const steps = ["อาการเบื้องต้น", "อาการเพิ่มเติม", "อาการที่อาจพบได้"];

  const handleSelectChange = (index) => {
    setStep(index + 1);
    setIsSelectShown(false);
  };
  const v = variants.slideDown;
  return (
    <>
      {/* Desktop version */}
      <div className={styles.stepIndicator}>
        {steps.map((n, index) => (
          <div
            key={n}
            className={`${styles.step} ${
              step === index + 1 ? styles.active : ""
            }`}
            onClick={() => setStep(index + 1)}
          >
            {n}
          </div>
        ))}
      </div>

      {/* Mobile version */}
      <div className={styles.mobileStepIndicator}>
        <div
          className={styles.dropdownToggle}
          onClick={() => setIsSelectShown(!isSelectShown)}
        >
          {steps[step - 1]}
          <FaArrowDown />
        </div>
        {isSelectShown && (
          <AnimatePresence>
            <motion.ul
              initial={v.initial}
              animate={v.animate}
              exit={v.exit}
              transition={{ duration: 0.8, delay: 0, type: "spring" }}
              className={styles.dropdownList}
            >
              {steps.map((n, index) => (
                <li
                  className={styles.selectList}
                  key={n}
                  onClick={() => handleSelectChange(index)}
                >
                  {n}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}

export default StepIndicator;
