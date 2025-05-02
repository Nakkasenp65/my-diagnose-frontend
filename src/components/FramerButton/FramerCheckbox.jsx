"use client";
import React from "react";
import styles from "./framerCheckbox.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function FramerCheckbox({ onChange, active = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <label className={styles.wrapper}>
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => onChange(e.target.checked)}
          className={styles.native}
        />
        {active ? (
          <FaCheckCircle
            className={`${styles.fake} ${active ? styles.active : ""}`}
          />
        ) : (
          <span className={`${styles.fake} ${active ? styles.active : ""}`} />
        )}
      </label>
    </motion.div>
  );
}

export default FramerCheckbox;
