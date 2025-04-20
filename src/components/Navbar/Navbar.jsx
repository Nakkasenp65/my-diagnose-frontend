"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "FastDiagnosis" },
    { href: "/purpose", label: "Purpose" },
    { href: "/aboutModel", label: "โมเดล" },
    { href: "/diagnose", label: "ตรวจสุขภาพ" },
  ];

  return (
    <LayoutGroup id="nav">
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.li
                key={item.href}
                className={`${styles.item} ${isActive ? styles.active : ""}`}
                layout
                layoutId={isActive ? "activeNav" : undefined}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                }}
                whileHover={isActive ? {} : { scale: 1.1 }}
              >
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </LayoutGroup>
  );
}
