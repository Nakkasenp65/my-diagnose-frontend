"use client";
import { useState } from "react";
import styles from "./framerAlert.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import FramerButton from "./FramerButton";

function FramerAlert({ setWarning }) {
  const alertVariants = {
    initial: { y: 100, scale: 0.75, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    transition: { duration: 0.3, ease: "easeInOut" },
    exit: {
      scale: 0.75,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const [isShown, setIsShown] = useState(true);

  const handleSetWarning = () => {
    // wait for 0.3 second before setWarning to false
    setIsShown(false);
    setTimeout(() => setWarning(false), 100);
  };

  return (
    <div className={styles.alertContainer}>
      <AnimatePresence mode="wait">
        {isShown && (
          <motion.div
            className={styles.alert}
            variants={alertVariants}
            initial="initial"
            animate="animate"
            transition="transition"
            exit="exit"
            key="alert-div"
          >
            กรุณาเลือกอาการอย่างน้อย 1 รายการ{" "}
            <FramerButton
              // className={styles.alertButton}
              onClick={() => handleSetWarning()}
            >
              ตกลง
            </FramerButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FramerAlert;
