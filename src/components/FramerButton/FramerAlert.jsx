import { createPortal } from "react-dom";
import styles from "./framerAlert.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import FramerButton from "./FramerButton";

function FramerAlert({ setWarning }) {
  const alertVariants = {
    initial: { y: 100, scale: 0.75 },
    animate: {
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    transition: { duration: 0.3, ease: "easeInOut" },
    exit: {
      y: -100,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      <div className={styles.alertContainer}>
        <motion.div
          className={styles.alert}
          variants={alertVariants}
          initial="initial"
          animate="animate"
          transition="transition"
          exit="exit"
          key="alert-div"
        >
          การแจ้งเตือน{" "}
          <FramerButton
            // className={styles.alertButton}
            onClick={() => setWarning(false)}
          >
            ตกลง
          </FramerButton>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default FramerAlert;
