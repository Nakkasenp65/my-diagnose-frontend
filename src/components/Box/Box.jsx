import styles from "./box.module.scss";

export default function Box({ title, description }) {
  return (
    <a className={styles.link} href="/">
      <div className={styles.container}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
