import styles from "./page.module.scss";
import Image from "next/image";
import bg from "../../public/images/bg2.jpg";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";
import Categories from "@/components/Category/Categories";
import AnimateIn from "@/components/AnimateIn";

export default function Home() {
  return (
    <AnimateIn>
      <main className={styles.main}>
        <Hero />
        <Categories />
        {/* <Team /> */}
      </main>
    </AnimateIn>
  );
}
