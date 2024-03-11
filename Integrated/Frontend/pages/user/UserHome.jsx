// import Typewriter from 'typewriter-effect';
import Uhome from '../../assets/images/Uhome.jpg';
import '../../assets/css/Home.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `url(${Uhome}) center/cover no-repeat`,
  opacity: 1,
  zIndex: -1,
};

function UserHome() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div id="overlayText">
          <h1>Your future starts here</h1>
          <p>Apply to college for the first time or transfer to complete your degree.Navigate your entire college application journey with Common App.
</p>
        </div>
      <div style={backgroundStyle}>
        {/* <div className="typewriter-container">
          <h1>
            <Typewriter
              options={{
                strings: ['Empower Your Ambitions: Envision, Apply, Achieve - Your College Journey Starts Now.'],
                autoStart: true,
                loop: true, 
              }}
            />
          </h1>
        </div> */}

<div className="container-section">
          <h2>Explore more than 1,000 colleges on Common App</h2>
          <div className="search-bar">
            <input type="text" placeholder="Enter the College.." />
          </div>
          <br/><br/>
          <p>Get connected with everything you need to apply to college, research financial aid and scholarships, and get advice from counselors,
             advisors and mentors.We strive for access, equity, and integrity in the college admission process. </p>
        </div>

        <div className="three-box-container">
    <div className="box">
      <h2>Plan Your Future</h2><br/>
      <p>The program builds from three rounds of pilots and research demonstrating that these offers have great potential to help more students–especially those who are first-generation or from low-income communities–access higher education.</p>
      <a href="https://www.commonapp.org/plan/why-college-matters">
        Learn More
      </a>
    </div>

    <div className="box">
      <h2>News and Updates</h2><br/>
      <p>The Federal Student Aid (FSA) YouTube channel shares step-by-step videos of information and resources related to the financial aid process. All information comes directly from the U.S. Department of Education.
         Their resources help make college education possible for everyone.</p>
         <a href="https://www.commonapp.org/plan/why-college-matters">
        Learn More
      </a>
    </div>

    <div className="box">
      <h2>Events And Webinars</h2><br/>
      <p> 
        <ul><li>
        National Institute for the Study of Transfer Students annual conference.</li>
        <li>2024 Generation Hope National Student Parent Conference
Generation Hope’s National Conference for student parents.</li></ul></p>
      <a href="https://www.commonapp.org/plan/why-college-matters">
        See More Events
      </a>
    </div>
  </div>
</div>
 <br/><br/><br/><br/><br/><br/><br/>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default UserHome;
