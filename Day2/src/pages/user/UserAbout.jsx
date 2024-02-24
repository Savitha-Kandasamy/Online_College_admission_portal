import '../../assets/css/AboutUs.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Uabout from "../../assets/images/Uabout.jpg";
import aboutvid from "../../assets/images/aboutvid.png";
const UserAbout = () => {
 

  return (
    <>
      <header>
        <NavBar />
      </header>
      <br/><br/><br/>
      <main className="about-section">
        <section className="picture-section">
          {/* Replace the background-style div with an image tag */}
          <img src={Uabout} alt="User's Home" className="user-image" />
        </section>
        <section className="content-section">
          <h1>What is Edu-GateWay</h1>
          <br/>
          <p>Each year, more than 1 million students apply to more than 1,000 Common App member colleges worldwide through our online college application platform. Learn more about applying through our first-year application by following our step-by-step guide below.</p>
        </section>
      </main>
      <h2>We’re committed to the pursuit of access and integrity in the 
        college admission process</h2>
        <main className="about-section">
        <section className="additional-section">
          <h2>Support</h2>
          <br/>
          <p>Through our support and outreach to the school counseling community, we help thousands of under-resourced educators scale their efforts to reach students who need them the most. We celebrate the school counseling profession through programs like School Counselor of the Year, and ready-to-use resources like Common App Ready.</p>
        </section>
        <section className="additional-section">
          <h2>Access and Equity</h2>
          <p>Since 1975, Common App has strived to remove barriers, to reduce the stress and burdens on students and their families from multiple college applications, and to create greater access to higher education opportunities for all students by creating and innovating a single, shared application for college admission.</p>
        </section>
        </main>
        <main>
          <section className="content">
            <h2>Reports and Insights</h2>
            <br/>
            <p>As a non-profit membership organization serving millions of students each year, Common App is uniquely positioned to share data and provide insight into the college admissions process.
Our reports and insights are driven by more than 40 years of experience supporting applicants, recommenders, and admissions professionals. With more than 1,000 member colleges and universities serving over 1 million applicants each year, we are able to devise insight into application trends across the applicant lifecycle and identify potential barriers and opportunities to improve college access.</p>
          </section>
        </main>
<br/><br/><br/>
        <main className="about-section">
        <section className="content1-section">
          <h1>Supporting students can be hard. Supporting the recommendation process doesn’t need to be.</h1>
          <br/>
          <p>Our Solutions Center support team is available 24/7/365 to help you help your students. Visit our support portal to:
<br/>
* View Frequently Asked Questions<br/>
*Access training materials and videos<br/>
*Submit a support ticket</p>
<button className="Aenroll-button">Request Support</button>
        </section>
        <section className="picture1-section">
          {/* Replace the background-style div with an image tag */}
          <img src={aboutvid} alt="User's Home" className="user1-image" />
        </section>
      </main>
      <br/><br/><br/><br/>

    </>
  );
}

export default UserAbout;
