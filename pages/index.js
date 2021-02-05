import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../components/Card/Card";
import HelpCard from "../components/HelpCard/HelpCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEEP Karachi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.carousel}>
        <Carousel showThumbs={false}>
          <div className={styles.carouselImgContainer}>
            <img src="carousel1.jpg" />
          </div>
          <div className={styles.carouselImgContainer}>
            <img src="carousel2.jpg" />
          </div>
          <div className={styles.carouselImgContainer}>
            <img src="carousel3.jpg" />
          </div>
        </Carousel>
      </div>

      <main className={styles.main}>
        <div className={styles.landingAbout}>
          <div className={styles.landingAboutHeading}>
            <h1>
              About
              <br />
              IEEEP Karachi
            </h1>
          </div>
          <div>
            <p>
              IEEEP Karachi Centre ware formed in 1979 as a Local Chapter in the
              business and economic hub of the country. It is proud to have very
              accomplished engineers in its fold who have found affiliation with
              the centre as the most rewarding experience. Morever,
              participation in its activities has served as the best means of
              repaying their profession through voluntary efforts.
            </p>
            <Link href="/about">
              <a>Read more &#8594;</a>
            </Link>
          </div>
        </div>
        <div className={styles.landingAbout}>
          <div className={styles.landingAboutHeading}>
            <h1>Chairman's Message</h1>
          </div>
          <p>
            In the initial days of Internet a Website used to be only an easy
            means of publicizing your organization to the world in general. Not
            any more. Now a Website is an Organizational Tool to execute
            operations of Advertising, Sales, Administration and Information by
            making it interactive. Separate modules performing different
            functions while still protecting privacy of all concerned.
          </p>
          <Link href="/about">
            <a>Read more &#8594;</a>
          </Link>
        </div>
      </main>

      <div className={styles.eventCardsContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <p className={styles.title}>Upcomming Events</p>
          <Link href="/events">
            <a>Read More &#8594;</a>
          </Link>
        </div>
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

      <div className={styles.helpCardsContainer}>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p className={styles.title}>How Can We Help You</p>
        </div>
        <div className={styles.eventCards}>
          <HelpCard
            image="student.svg"
            title="Students"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida eget felis in commodo."
          />
          <HelpCard
            image="author.svg"
            title="Authors"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida eget felis in commodo."
          />
          <HelpCard
            image="members.svg"
            title="Members"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida eget felis in commodo."
          />
          <HelpCard
            image="volunteer.svg"
            title="Volunteers"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida eget felis in commodo."
          />
        </div>
      </div>

      <div className={styles.newsCardsContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
            color: "#fafafa",
          }}
        >
          <p className={styles.title}>Latest News</p>
        </div>
        <div className={styles.eventCards}>
          <Card
            image="5g.jpg"
            title="Is 5g Safe"
            content="5G promises to usher in a new era of connectivity and productivity, but is it safe? Misconceptions about the health impacts of 5G abound, even some that imply the technology is associated with the COVID-19 pandemic. Episode 4 of “The 5G Deployment Challenge” brings together a panel of industry and technology experts including David Witkowski of INGR, and William F. Hammett and Rajat Mathur of Hammett & Edison."
          />
          <Card
            image="mce.jpg"
            title="Everything You Need To Know About Organizing IEEEP Conference"
            content="In order to serve our communities during the COVID-19 pandemic, many IEEE conference organizers are contemplating virtual formats, so I would like to provide some guidance on translating your event from face-to-face to a successful virtual event. Perhaps the most important message is that you can do it!"
          />
          <Card
            image="vaccination.jpg"
            title="This Is How To Vaccinate The World From COVID-19"
            content="In a triumph of science, the first two large-scale trials to report the effectiveness of vaccines against SARS-CoV-2—the deadly, highly contagious virus that causes COVID-19—were both great successes right out of the gate. In November, the pharmaceutical giant Pfizer and the much younger biotech company Moderna both reported that their vaccines were about 95 percent effective in preventing cases of COVID-19."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
