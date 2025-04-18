"use client";

import { useRouter } from "next/navigation"; // ใช้สำหรับ app router
import styles from "./page.module.scss";
import Image from "next/image";
import bg from "../../public/images/bg2.jpg";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";
import Categories from "@/components/Category/Categories";

export default function Home() {
  const router = useRouter();

  const handleOpenForm = () => {
    router.push("/form"); // ชี้ไปยังหน้าที่แสดงฟอร์ม
  };

  return (
    <main className={styles.main}>
      <Image
        src={bg}
        alt="website-gradient-background"
        className={styles.backgroundImage}
      />
   
      <Hero />
      <Categories />
      <div className={styles.centerFormSection}>
        <h1>ทำแบบฟอร์มวิเคราะห์</h1>
        <button onClick={handleOpenForm} className={styles.formButton}>
          เปิดแบบฟอร์ม
        </button>
      </div>
      <Team />

      
    </main>
  );
}
