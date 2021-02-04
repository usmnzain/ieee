import styles from "../../styles/Card.module.css";

export default function Card({ image, title, content }) {
  return (
    <div className={styles.helpCard} style={{ padding: 15 }}>
      <img className={styles.helpCardImg} src={image} />
      <div className={styles.helpCardBody}>
        <h3 className={styles.helpCardTitle}>{title}</h3>
        {content && <p>{content} &#8594;</p>}
      </div>
    </div>
  );
}
