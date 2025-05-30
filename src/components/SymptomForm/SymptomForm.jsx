"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./symptomForm.module.scss";
import PageContent from "./PageContent";
import FramerAlert from "../FramerButton/FramerAlert";
import Result from "../Result/Result";
import StepIndicator from "./StepIndicator";

export default function SymptomForm({
  setFormFilled,
  result,
  setResult,
  formData,
  setFormData,
}) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(null);

  const updateSymptom = (symptomValue, value) => {
    setFormData((prev) => ({
      ...prev,
      [symptomValue]: value,
    }));
  };

  const scrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
      scrollToTop();
    } else handleSubmit();
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      scrollToTop();
    }
  };

  async function handleSubmit() {
    setIsLoading(true);
    scrollToTop();
    setError(null);
    // Convert formData to a query string (formdata contain symptomName: true/false/0/1)
    const selectedSymptoms = Object.entries(formData)
      .filter(([_, value]) => value === true || value === 0 || value === 1)
      .map(([key]) => key);

    // Check if there are any symptoms selected
    if (selectedSymptoms.length === 0) {
      setWarning(true);
      setIsLoading(false);
      return;
    }

    try {
      const query = selectedSymptoms.join(",");
      // const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
      // const response = await fetch(`${BACKEND_URL}predict?symptoms=${query}`);

      const response = await fetch(`/predict?symptoms=${query}`);
      if (!response.ok) {
        throw new Error("Failed to get prediction from server.");
      }

      // Optional: simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = await response.json();
      setResult(data);
      setFormFilled(true);
    } catch (err) {
      setError(err.message);
      setFormFilled(false);
    } finally {
      setIsLoading(false);
    }
  }

  const handleReset = () => {
    setStep(1);
    setFormData({});
    setResult(null);
    setError(null);
  };

  if ((result === null && isLoading === false && warning === false) || error)
    return (
      <div className={styles.formContainer}>
        <StepIndicator step={step} setStep={setStep} />
        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className={styles.pageWrapper}
          >
            <PageContent
              page={step}
              formData={formData}
              onSymptomChange={updateSymptom}
            />
          </motion.div>
        </AnimatePresence>
        {/* Controls */}
        <div className={styles.controls}>
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={styles.backBtn}
          >
            ย้อนกลับ
          </button>
          <button onClick={handleNext} className={styles.nextBtn}>
            {step < 3 ? "ถัดไป" : "ประมวลผล"}
          </button>
        </div>
      </div>
    );
  else if (isLoading)
    return (
      <div className={styles.loadingContainer}>
        <h1>Processing</h1> <span className={styles.loader}></span>{" "}
      </div>
    );
  else if (result) return <Result result={result} handleReset={handleReset} />;
  else if (warning) return <FramerAlert setWarning={setWarning} />;
}
