import styles from "./formHead.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FormHead({
  category,
  setCategory,
  setFormFilled,
  formFilled = false,
}) {
  const FORM_STATE = ["หมวดหมู่โรค", "อาการ", "ผลลัพธ์"];

  const handleBack = () => {
    setCategory("");
    setFormFilled(false);
  };

  return (
    <div className={styles.formHead}>
      {category !== "" ? (
        <>
          <motion.button
            className={styles.formBack}
            onClick={() => handleBack()}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowLeft />
          </motion.button>
          {formFilled ? (
            <h1>{FORM_STATE[2]}</h1>
          ) : (
            <>
              <h1>{FORM_STATE[1]}</h1>
            </>
          )}
        </>
      ) : (
        <>
          <h1>{FORM_STATE[0]}</h1>
        </>
      )}
    </div>
  );
}
