import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/AdminCourse.css';
import Footer from '../../components/Footer';
import AdminNavbar from '../../components/AdminNavbar';
import axios from 'axios';

function AdminCourse() {
  const { instituteId } = useParams();

  const [coursesData, setCoursesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [editedCourse, setEditedCourse] = useState({
    courseId: '',
    courseName: '',
    courseDuration: '',
    fees: '',
    courseDescription: '',
    noOfSeats: '',
    institution: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // const token = localStorage.getItem('token');
        // const role = localStorage.getItem('role');
        // if (!token || role !== 'admin') {
        //   throw new Error('Authentication token not found or insufficient permissions.');
        // }

        const response = await axios.get(`http://localhost:2020/api/courses/byInstitute/${instituteId}`, {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        });

        if (Array.isArray(response.data)) {
          setCoursesData(response.data);
        } else if (typeof response.data === 'object' && response.data !== null) {
          setCoursesData([response.data]);
        } else {
          console.error('Invalid API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError(error.message);
      }
    };

    fetchCourses();
  }, [instituteId]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddSaveClick = async () => {
    try {
      const response = await axios.post(
        `http://localhost:2020/api/courses/${instituteId}`,
        editedCourse,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.status === 201) {
        const savedCourse = response.data;
        setCoursesData((prevCourses) => {
          if (Array.isArray(prevCourses)) {
            return [...prevCourses, savedCourse];
          } else {
            console.error('Previous courses is not an array:', prevCourses);
            return [savedCourse];
          }
        });
        setAddFormVisible(false);
        setEditedCourse({
          courseName: '',
          courseDuration: '',
          fees: '',
          courseDescription: '',
          noOfSeats: '',
          institution: '',
        });
      } else {
        console.error('Failed to create a new course:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating a new course:', error);
      setError(error.message);
    }
  };

  const handleAddClick = () => {
    setAddFormVisible(true);
  };

  const handleEditClick = (course) => {
    setEditedCourse({ ...course });
    setEditFormVisible(true);
  };
 
  const handleEditFormClose = () => {
    setEditFormVisible(false);
    setEditedCourse({
      courseId: '',
      courseName: '',
      courseDuration: '',
      fees: '',
      courseDescription: '',
      noOfSeats: '',
      institution: '',
    });
  };


  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');

      if (!token || role !== 'admin') {
        throw new Error('Authentication token not found or insufficient permissions.');
      }

        const response = await fetch(`http://localhost:2020/api/courses/${editedCourse.courseId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedCourse),
        });
  
        if (response.ok) {
          console.log('Updated Course Successfully');
          setCoursesData((prevCourses) => {
            const updatedCourses = prevCourses.map((course) => {
              if (course.courseId === editedCourse.courseId) {
                return editedCourse;
              }
              return course;
            });
            return updatedCourses;
          });
          handleEditFormClose();
        } else {
          console.error('Failed to update course:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating course:', error);
      }
    };

    const handleDeleteClick = async (courseId) => {
      try {
        const response = await fetch(`http://localhost:2020/api/courses/${courseId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          setCoursesData((prevCourses) => prevCourses.filter((course) => course.courseId !== courseId));
          console.log('Course Deleted Successfully');
        } else {
          console.error('Failed to delete course:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting course:', error);
      }
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
        <div className={`course-container ${editFormVisible || addFormVisible ? 'dark-overlay' : ''}`}>
          <h1>Available Courses</h1>
          <input
            type="text"
            placeholder="Search Courses"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <button
            onClick={handleAddClick}
            style={{ backgroundColor: "#4d82ad", border: 'none', height: "5vh", width: '15vh', marginTop: "3px", borderRadius: "5px", color: "white", marginLeft: '10px' }}
          >
            Add Course
          </button>
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
                      style={{ width: '100px', height: '40px', textAlign: 'center' }}
                      onClick={() => handleEditClick(course)}
                    >
                      Edit
                    </button>
                    <br />
                    <br />
                    <button
                      className='enroll-button'
                      style={{ width: '100px', height: '40px' }}
                      onClick={() => handleDeleteClick(course.courseId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editFormVisible && (
          <div className='enrollment-form' style={{ width: '70vw', height: '90vh' }}>
            <h2>Edit Course Information</h2>
            <label>Name:</label>
            <input
              type='text'
              name='courseName'
              value={editedCourse.courseName}
              onChange={(e) => setEditedCourse({ ...editedCourse, courseName: e.target.value })}
            />
            {/* <div className='lediv' style={{ width: '40%', float: 'left' }}> */}
              <label>Duration:</label>
              <input
                type='text'
                name='courseDuration'
                value={editedCourse.courseDuration}
                onChange={(e) => setEditedCourse({ ...editedCourse, courseDuration: e.target.value })}
              />
              <div>
                <label>Available Seats:</label>
                <input
                  type='text'
                  name='noOfSeats'
                  value={editedCourse.noOfSeats}
                  onChange={(e) => setEditedCourse({ ...editedCourse, noOfSeats: e.target.value })}
                />
              </div>
              <label>Description:</label>
              <input
                type='text'
                name='courseDescription'
                value={editedCourse.courseDescription}
                onChange={(e) => setEditedCourse({ ...editedCourse, courseDescription: e.target.value })}
              />
            {/* </div> */}
            <br /><br />
            <div style={{ display: "flex", marginTop: "0vh", justifyContent: 'center' }}>
              <button onClick={handleSaveClick} style={{ marginLeft: '0vw', marginRight: "2vw", }} >Save</button>
              <button onClick={handleEditFormClose} style={{ backgroundColor: "grey", }}>Close</button>
            </div>
          </div>
        )}

        {addFormVisible && (
          <div className='enrollment-form' style={{ width: '100vh', height: '75vh', marginTop: '1vh' }}>
            <h2>Add Course Information</h2>
            <label>Name:</label>
            <input type='text' name='name'
              value={editedCourse.courseName}
              onChange={(e) => setEditedCourse({ ...editedCourse, courseName: e.target.value })}
            />
            <div className='lediv' style={{ width: '40%', float: 'left' }}>
              <label>Duration:</label>
              <input type='text' name='duration' value={editedCourse.courseDuration}
                onChange={(e) => setEditedCourse({ ...editedCourse, courseDuration: e.target.value })}
              />
              <label>Description:</label>
              <input type='text' name='description'
                value={editedCourse.courseDescription}
                onChange={(e) => setEditedCourse({ ...editedCourse, courseDescription: e.target.value })}
              />
              {/* <label>Institution:</label>
              <input type='text' name='institution' value={editedCourse.institution}
                onChange={(e) => setEditedCourse({ ...editedCourse, institution: e.target.value })}
              /> */}
            </div>
            <div className='rediv' style={{ width: '40%', float: 'right', marginRight: '2vw' }}>
              <label>Fees:</label>
              <input type='text' name='fees' value={editedCourse.fees}
                onChange={(e) => setEditedCourse({ ...editedCourse, fees: e.target.value })}
              />
              <label>Available Seats:</label>
              <input type='text' name='availableSeats' value={editedCourse.noOfSeats}
                onChange={(e) => setEditedCourse({ ...editedCourse, noOfSeats: e.target.value })}
              />
            </div>
            <br /><br />
            <div style={{ display: 'flex', marginTop: '25vh' }}>
              <button onClick={handleAddSaveClick} style={{ marginRight: '5vw', marginLeft: '0vw' }}>
                Save
              </button>
              <div style={{ width: '2vw' }}></div>
              <button style={{ backgroundColor: 'grey'}} onClick={() => setAddFormVisible(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            Error: {error}
          </div>
        )} */}
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AdminCourse;