import { useState } from "react";
import styles from "./formHead.module.scss";
import { useCategoryContext } from "@/context/CategoryContextProvider";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FormHead() {
  const [formFilled, setFormFilled] = useState(false);
  const FORM_STATE = ["หมวดหมู่โรค", "อาการ", "ยืนยัน"];
  const [category, setCategory] = useCategoryContext();
  return (
    <div className={styles.formHead}>
      {category !== "" ? (
        <>
          <motion.button
            className={styles.formBack}
            onClick={() => setCategory("")}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowLeft />
          </motion.button>
          {formFilled ? (
            <h1>{FORM_STATE[1]}</h1>
          ) : (
            <>
              <h1>{FORM_STATE[2]}</h1>
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
