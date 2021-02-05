import HelpCard from "../../components/HelpCard/HelpCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import homeStyles from "../../styles/Home.module.css";
import MemberCard from "../../components/MemberCard/MemberCard";

export default function Council() {
  return (
    <div className={homeStyles.container}>
      <Header />
      <div className={homeStyles.about}>
        <p className={homeStyles.title}>IEEEP Karachi Center Local Council</p>
      </div>

      <div className={homeStyles.eventCardsContainer}>
        <p className={homeStyles.subtitle}>Office Bearers</p>

        <div className={homeStyles.grid}>
          <MemberCard
            image="chairman.jpg"
            title="Engr. Irfan Ahmad"
            content="Chairman"
          />
          <MemberCard
            image="Parkash.jpg"
            title="Engr. Parkash Lohana"
            content="Vice Chairman"
          />
          <MemberCard
            image="Ishtiaqul.jpg"
            title="Engr. Ishtiaq ul Haq"
            content="Hony. Finance Secretary"
          />
          <MemberCard
            image="Munis.jpg"
            title="Engr. Munis Iqbal Siddiqui"
            content="Hony. Secretary"
          />
          <MemberCard
            image="Shahnawaz.jpg"
            title="Dr. Shahnawaz Farhan"
            content="Hony. Joint Secretary"
          />
        </div>
      </div>
      <div className={homeStyles.eventCardsContainer}>
        <p className={homeStyles.subtitle}>Members</p>

        <div className={homeStyles.grid}>
          <MemberCard
            image="Zubair.jpg"
            title="Dr. Muhammad Zubair Ahmad"
            content="Convener Technical"
          />
          <MemberCard
            image="Atif.jpg"
            title="Engr. Atif Fareed"
            content="Co-Convener IEEEP Fair"
          />
          <MemberCard
            image="Beenish.jpg"
            title="Engr. Beenish Fayyaz"
            content="Co-Convener Technical"
          />
          <MemberCard
            image="Taha.jpg"
            title="Taha Hassan"
            content="Co-convener Function Management"
          />
          <MemberCard
            image="Ziaulislam.jpg"
            title="Mr. Ziaulislam Zuberi"
            content="Convener Media Relations"
          />
          <MemberCard
            image="Imran.jpg"
            title="Engr. Imran Zafar"
            content="Convener Function Management"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
