import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
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
