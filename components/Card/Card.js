import Link from "next/link";
import styles from "../../styles/Card.module.css";

export default function Card({ image, title, content, date }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={image} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {content && <p style={{ marginBottom: 20 }}>{content}</p>}
        {!date && <p style={{ textDecoration: "underline" }}>Read More</p>}
      </div>
      {date && <div className={styles.eventDate}>{date}</div>}
      {date && (
        <div className={styles.cardFooter}>
          <div>
            <p>
              <img style={{ marginRight: 5 }} src="placeholder.png" />
              Virtual Conference
            </p>
          </div>

          <Link href="/">
            <a style={{ textDecoration: "underline" }}>Read More</a>
          </Link>
        </div>
      )}
    </div>
  );
}
