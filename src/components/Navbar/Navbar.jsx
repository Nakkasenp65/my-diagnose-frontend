import styles from "./navbar.module.scss";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">FastDiagnosis</Link>
      </div>
      <ul className={styles.list}>
        <li>
          <Link href="/purpose">Purpose</Link>
        </li>
        <li>
          <Link href="/aboutModel">โมเดล</Link>
        </li>
        <li>
          <Link href="/diagnose">ตรวจสุขภาพ</Link>
        </li>
      </ul>
    </nav>
  );
}
