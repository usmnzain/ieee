import Link from "next/link";
import styles from "../../styles/Card.module.css";

export default function MemberCard({ image, title, content, date }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} style={{ height: 300 }} src={image} />
      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{title}</p>
        {content && <p style={{ textAlign: "center" }}>{content}</p>}
      </div>
    </div>
  );
}
