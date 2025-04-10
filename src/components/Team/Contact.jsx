import styles from "./contact.module.scss";
export default function Contact({
  title = "Our Team",
  description = "CSC472 Artificial intelligence",
}) {
  return (
    // card containing a member info
    // this card is also used as header
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
