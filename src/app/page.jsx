import styles from "./page.module.scss";
import Image from "next/image";
import bg from "../../public/images/bg2.jpg";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";
import Categories from "@/components/Category/Categories";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Categories />
      <Team />
    </main>
  );
}
