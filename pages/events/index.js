import styles from "../../styles/Home.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

export default function Events() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.about} style={{ marginBottom: 50 }}>
        <p className={styles.title}>IEEEP Karachi Events</p>
      </div>

      <div className={styles.eventCardsContainer}>
        <div className={styles.eventCards}>
          <Card
            image="jeju.png"
            date="13-16 Jan"
            title="2021 International Conference on Information Networking (ICOIN)"
            content="Ad hoc networks, sensor networks, RFID, cellular networks, cloud computing, CDN, CCN/ICN, DTN, Future Internet, Internet, IoT/M2M, Multimedia communications, Security, Optical Networks, WBAN/WPAN/WLAN/WMAN/WWAN, Social Networks, etc."
          />
          <Card
            image="india.png"
            date="12-15 Feb"
            title="2021 34th International Conference on VLSI Design and Embedded Systems (VLSID)"
            content="The 34th International Conference on VLSI Design (VLSID 2021) is the premium global event held in India in the field of VLSI design, bringing together stakeholders that includes academia, industry, R&D houses and policy makers in the field of hardware and software system design, verification, test, ..."
          />
          <Card
            image="hawaii.png"
            date="23-25 Feb"
            title="2021 IEEE Winter Conference on Applications of Computer Vision (WACV)"
            content="Recent efforts in computer vision have demonstrated impressive successes on a variety of real-world challenges. WACV conferences provide a forum for computer vision researchers working on practical applications to share their latest developments. WACV 2019 solicits high-quality, original submissions..."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
