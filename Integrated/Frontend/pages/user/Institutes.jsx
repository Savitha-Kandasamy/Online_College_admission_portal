// Import necessary libraries and components
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import '../../assets/css/AdminInstitute.css';

const Institute = () => {
  const navigate = useNavigate();

  const [collegesData, setCollegesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    // Fetch the list of colleges when the component mounts
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await fetch('http://localhost:2020/api/institutes');
      if (response.ok) {
        const data = await response.json();
        setCollegesData(data);
      } else {
        console.error('Failed to fetch colleges');
      }
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  };


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };





  const handleStudentSelectCourse = (instituteId) => {
    navigate(`/Courses/${instituteId}`);
  };



  return (
    <>
      <header>
        <AdminNavBar />
      </header>
      <body className='ibody'>
        {/* <div style={{ display: 'flex' }}>
          <input
            style={{ width: '300px', marginLeft: '100px', marginRight: '60px',borderRadius:'5px' }}
            type='text'
            placeholder='Search Colleges'
            value={searchTerm}
            onChange={handleSearchChange}
          /> */}

        {/* </div> */}
        <br /><br />
        <ul className='iul'>
          {collegesData.map((college) => (
            <li key={`college_${college.instituteId}`}>
              <div className={`college-card `}>
              <img src={college.image}  />
                <h3>{college.instituteName}</h3>
                <button className='ienroll-button' onClick={() => handleStudentSelectCourse(college.instituteId)}>Enroll Now</button>

                <div className='card-content'>
                  <p className='address'>{college.instituteAddress}</p>
                  <div className='separator'></div>
                  <div className='row'>
                    <div className='topic'>Courses Offered:</div>
                    <div className='content inline'>{college.noOfCoursesAvailable} courses</div>
                  </div>
                  <div className='row'>
                    <div className='topic'>Description</div>
                    <div className='content inline'>{college.instituteDescription}</div>
                  </div>
                  <div className='row'>
                    <div className='topic'>Institute Name:</div>
                    <div className='content inline'>{college.instituteName}</div>
                  </div>
                  <div className='separator'></div>
                  <div className='row'>
                    <div className='topic'>Mobile:</div>
                    <div className='content inline'>{college.mobile}</div>
                  </div>
                  <div className='row'>
                    <div className='topic'>Email Id:</div>
                    <div className='content inline'>{college.email}</div>
                  </div>
                  <div className='separator'></div>
                  <br></br>
                </div>
              </div>
            </li>
          ))}
        </ul>



      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Institute;
