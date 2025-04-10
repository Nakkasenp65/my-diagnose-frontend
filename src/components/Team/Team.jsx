import styles from "./team.module.scss";
import Contact from "./Contact";

export default function Team() {
  return (
    <>
      <section className={styles.team}>
        <Contact />
        <Contact
          title={"Nakasen Puttacharoen"}
          description={"Fullstack Developer"}
        />
        <Contact
          title={"Jiramaet Sittinisaisuk"}
          description={"Information Expert"}
        />
        <Contact title={"Darkz"} description={"IO"} />
      </section>
    </>
  );
}
