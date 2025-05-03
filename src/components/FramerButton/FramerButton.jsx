"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./framerButton.module.scss";

export default function FramerButton({ children, onClick, active = false }) {
  return (
    <motion.span
      className={`${styles.btn} ${active ? styles.active : ""}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.span>
  );
}
