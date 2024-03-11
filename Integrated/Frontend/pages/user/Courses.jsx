import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/Courses.css';
import Footer from '../../components/Footer';
import AdminNavbar from '../../components/AdminNavbar';
import axios from 'axios';

function Courses() {
  const { instituteId } = useParams();

  const [coursesData, setCoursesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [confirmationBoxVisible, setConfirmationBoxVisible] = useState(false);
  const [enrollmentFormVisible, setEnrollmentFormVisible] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:2020/api/courses/byInstitute/${instituteId}`);
        if (Array.isArray(response.data)) {
          setCoursesData(response.data);
        } else if (typeof response.data === 'object' && response.data !== null) {
          setCoursesData([response.data]);
        } else {
          console.error('Invalid API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [instituteId]);

  const handleEnrollmentFormClose = () => {
    setEnrollmentFormVisible(false);
    // Display an alert with OK and Cancel buttons
    const confirmation = window.confirm(`Do you want to enroll in this course`);

    // Check if the user clicked OK
    if (confirmation) {
      setEnrollmentFormVisible(true);
      setPaymentVisible(true);
    }
  };

  const handleProceedToPayment = () => {
    // Show the confirmation box
    window.location.href = '/Pay';
    setConfirmationBoxVisible(true);
  };

  const handleEnrollClick = () => {
    setEnrollmentFormVisible(true);
  };

  const filteredCourses = Array.isArray(coursesData)
    ? coursesData.filter((course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <header>
        <AdminNavbar />
      </header>
      <body className='cbody'>
        <div className={`course-container`}>
          <h1>Available Courses</h1>
          <input
            type="text"
            placeholder="Search Courses"
            value={searchTerm}
            className="search-bar"
          />
          
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Fees</th>
                <th>Description</th>
                <th>Available Seats</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={`course_${course.courseId}`} >
                  <td>{course.courseName}</td>
                  <td>{course.courseDuration}</td>
                  <td>{course.fees}</td>
                  <td>{course.courseDescription}</td>
                  <td>{course.noOfSeats}</td>
                  <td>
                    <button
                      className='enroll-button'
                      onClick={() => handleEnrollClick(course)}
                    >
                      Enroll Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enrollment Form */}
        {!confirmationBoxVisible && enrollmentFormVisible && (
          <div className='enrollment-form'>
            <h2>Enrollment Form</h2>
            <label>Marks: <input type="text" /></label><br />
            {!paymentVisible && (
              <button onClick={handleEnrollmentFormClose}>Enroll</button>
            )}
            {paymentVisible && (
              <button onClick={handleProceedToPayment}>Proceed to Payment</button>
            )}
          </div>
        )}

      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Courses;
