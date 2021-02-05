import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "../../styles/Home.module.css";

export default function About() {
  const {
    container,
    title,
    about,
    aboutTextSection,
    aboutText,
    aboutImg,
  } = styles;
  return (
    <div className={container}>
      <Header />
      <div className={about}>
        <p className={title}>About IEEEP Karachi</p>
      </div>

      <div className={aboutTextSection}>
        <p className={title}>History of IEEEP Karachi</p>
        <hr />
        <div className={aboutText}>
          <img className={aboutImg} src="about-logo.jpeg" />
          <div
            style={{
              lineHeight: 1.75,
            }}
          >
            <p>
              Engineering to us doesn’t only involve solving problems; rather it
              entails a wholesome approach towards improving the standard of
              living of the fellow being. With this in mind, the electrical and
              electronics engineers formed IEEEP (Institution of Electrical &
              Electronics Engineers Pakistan) with its head office in Lahore.
              IEEEP Karachi Centre ware formed in 1979 as a Local Chapter in the
              business and economic hum of the country. It is proud to have very
              accomplished engineers in its fold who have found affiliation with
              the centre as the most rewarding experience. Morever,
              participation in its activities has served as the best means of
              repaying their profession through voluntary efforts.
            </p>
            <p>
              The paramount objective of the institution revolves around the
              dissemination of knowledge therefore the institution since its
              inception has been striving hard to fulfill its obligations. IEEEP
              is purely non-commercial entity, only on subscriptions from its
              members and donations from the patriotic entrepreneurs dealing
              with the electrical and electronics goods. The fantastic speed
              with which technical advancements are taking place in various
              branches of engineering and science make it imperative, in fact
              inevitable for societies and institutions to be formed to deal
              with the study, practice and progress in the specialized subjects
              they cover. To achieve the objective IEEEP is making best efforts
              to spread engineering education and technology through its
              publications and events. Thus IEEEP is playing a commendable role
              in promoting engineering education and profession in the country.
            </p>
          </div>
        </div>
      </div>

      <div className={aboutTextSection}>
        <p className={title}>Chairman's Message</p>
        <hr />
        <div className={aboutText}>
          <img className={aboutImg} src="chairman.jpg" />
          <div style={{ lineHeight: 1.75 }}>
            <p>
              In the initial days of Internet a Website used to be only an easy
              means of publicizing your organization to the world in general.
              Not any more. Now a Website is an Organizational Tool to execute
              operations of Advertising, Sales, Administration and Information
              by making it interactive. Separate modules performing different
              functions while still protecting privacy of all concerned.{" "}
            </p>
            <p>
              On our Website, therefore, you will eventually find, besides all
              the details about IEEEP Karachi Center including the details and
              contacts of Office bearers, Conveners of different committees,
              details of all the current as well archived activities, Event
              Calendar, Pictures of Events, Forms and Documents to be down
              loaded, copies of Technical Papers presented, modules for
              subscribing, payments, registrations, membership, donations,
              posting of CVs for job seekers, posting of vacancies by employers
              etc.I know this to be a tall claim but our team believes in
              keeping our goals high. The objective of the institution of
              Electrical & Electronics Engineers Pakistan, revolves around the
              dissemination of knowledge and improvement of professional
              standards in all the disciplines of Engineering under the umbrella
              of IEEEP.{" "}
            </p>
            <p>
              We at the Institution of Electrical & Electronics Engineers
              therefore, since its inception, have been striving hard to fulfill
              its obligations. To achieve this objective IEEEP Karachi Center
              holds various Monthly and Annual Events like International
              Symposium, IEEEP Fair, Student’s Seminar and monthly Technical
              Paper presentation etc. All ofthese shall be projected and
              displayed on our website for any person or organization to be
              benefited by it.{" "}
            </p>
            <p>
              As the Chairman of Karachi Center, I would like to make sure that
              our Website provides you as much as any Website can provide
              specifically to IEEEP members and Engineering community in
              general.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
