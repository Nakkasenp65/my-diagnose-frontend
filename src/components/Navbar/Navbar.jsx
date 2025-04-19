"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  function returnActive(pathLink) {
    if (pathname === pathLink) return styles.active;
    else return null;
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={returnActive("/")}>
          <Link href="/">FastDiagnosis</Link>
        </li>
        <li className={returnActive("/purpose")}>
          <Link href="/purpose">Purpose</Link>
        </li>
        <li className={returnActive("/aboutModel")}>
          <Link href="/aboutModel">โมเดล</Link>
        </li>
        <li className={returnActive("/diagnose")}>
          <Link href="/diagnose">ตรวจสุขภาพ</Link>
        </li>
      </ul>
    </nav>
  );
}
