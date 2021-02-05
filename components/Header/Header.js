import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/ieee.png" />
        <h1 style={{ marginLeft: "10px" }}>IEEEP Karachi</h1>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/council">
          <a className={styles.link}>Local Council</a>
        </Link>
        <Link href="/events">
          <a className={styles.link}>Events</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </div>
    </div>
  );
}
