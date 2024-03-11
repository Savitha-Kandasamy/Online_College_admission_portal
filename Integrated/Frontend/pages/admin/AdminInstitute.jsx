// Import necessary libraries and components
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import '../../assets/css/AdminInstitute.css';

const AdminInstitute = () => {
  const navigate = useNavigate();

  const [collegesData, setCollegesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [editedCollege, setEditedCollege] = useState({
    instituteName: '',
    instituteDescription: '',
    instituteAddress: '',
    mobile: '',
    email: '',
    noOfCoursesAvailable: '',
  image:'',
  });

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

  const handleAddClick = () => {
    setAddFormVisible(true);
    setEditedCollege({
      instituteName: '',
      instituteDescription: '',
      instituteAddress: '',
      mobile: '',
      email: '',
      noOfCoursesAvailable: '',
      instituteId: '',
      image:'',
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch('http://localhost:2020/api/institutes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCollege),
      });

      if (response.ok) {
        const updatedCollege = await response.json();
        setCollegesData((prevColleges) => [...prevColleges, updatedCollege]);
        setAddFormVisible(false);
        setEditedCollege({
          instituteName: '',
          instituteDescription: '',
          instituteAddress: '',
          mobile: '',
          email: '',
          noOfCoursesAvailable: '',
          image:'',
        });
      } else {
        console.error('Failed to add college:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding college:', error);
    }
  };

  const handleEditClick = (college) => {
    setSelectedCollege(college);
    setEditedCollege({ ...college });
    setEditFormVisible(true);
  };

  const handleEditFormClose = () => {
    setEditFormVisible(false);
    setAddFormVisible(false);
    setEditedCollege({
      instituteName: '',
      instituteDescription: '',
      instituteAddress: '',
      mobile: '',
      email: '',
      noOfCoursesAvailable: '',
      description: '',
      instituteId: '',
      image:'',
    });
    setSelectedCollege(null);
  };


  const handleUpdateClick = async () => {
    try {
      const response = await fetch(`http://localhost:2020/api/institutes/${editedCollege.instituteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCollege),
      });

      if (response.ok) {
        console.log("Updated Successfully");
        setCollegesData((prevColleges) => {
          const updatedColleges = prevColleges.map((college) => {
            if (college.instituteId === editedCollege.instituteId) {
              return editedCollege;
            }
            return college;
          });
          return updatedColleges;
        });
        handleEditFormClose();
      } else {
        console.error('Failed to update college:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating college:', error);
    }
  };

  const handleDeleteClick = async (instituteId) => {
    try {
      const response = await fetch(`http://localhost:2020/api/institutes/${instituteId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Filter out the deleted college from the collegesData
        setCollegesData((prevColleges) => prevColleges.filter(college => college.instituteId !== instituteId));
        console.log("College Deleted Successfully");
      } else {
        console.error('Failed to delete college:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting college:', error);
    }
  };
  
  const handleAdminEnrollInstitute = (instituteId) => {
    navigate(`/admincourse/${instituteId}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCollege((prevCollege) => ({
      ...prevCollege,
      [name]: value,
    }));
  };

  return (
    <>
      <header>
        <AdminNavBar />
      </header>
      <body className='ibody'>
        {/* <div style={{ display: 'flex' }}>
          <input
            style={{ width: '300px', marginLeft: '100px', marginRight: '60px' }}
            type='text'
            placeholder='Search Colleges'
            value={searchTerm}
            onChange={handleSearchChange}
          /> */}
          <button
            style={{ backgroundColor: '#4d82ad', border: 'none', height: '6vh', width: '15vh', marginTop: '3px', color: '#fff', borderRadius: '5px' }}
            onClick={handleAddClick}
          >
            Add College
          </button>
        {/* </div> */}
        <br /><br />
        <ul className='iul'>
          {collegesData.map((college) => (
              <li key={`college_${college.instituteId}`}>
              <div className={`college-card ${editFormVisible || addFormVisible ? 'ddark-overlay' : ''}`}>
                <img src={college.image}  />
                <h3>{college.instituteName}</h3>

               <button className='ienroll-button' onClick={() => handleAdminEnrollInstitute(college.instituteId)}>Courses</button>

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
                <center>
                  <button style={{ backgroundColor: '#7d7c7bfc', marginRight: '30px', color: '#fff', border: 'none', borderRadius: '5px', height: '30px', width: '50px' }} onClick={() => handleEditClick(college)}>Edit</button>
                  <button style={{ backgroundColor: '#7d7c7bfc', color: '#fff', border: 'none', borderRadius: '5px', height: '30px', width: '50px' }} onClick={() => handleDeleteClick(college.instituteId)}>Delete</button>
                </center>
              </div>
              </div>
            </li>
          ))}
        </ul>
        
        {addFormVisible && (
  <div className='college-form' style={{ width: '70vw' }}>
    <h2>Add College Information</h2>
    <label>Image:</label>
    <input
      type='text'
      name='image'
      value={editedCollege.image}
      onChange={handleInputChange}
    />

    <label>Name:</label>
    <input
      type='text'
      name='instituteName'
      value={editedCollege.instituteName}
      onChange={handleInputChange}
    />

    <div className='lediv' style={{ width: '40%', float: 'left' }}>
      <label>Contact Number:</label>
      <input
        type='text'
        name='mobile'
        value={editedCollege.mobile}
        onChange={handleInputChange}
      />

      <label>Fees:</label>
      <input
        type='text'
        name='fees'
        value={editedCollege.fees}
        onChange={handleInputChange}
      />

      <label>Courses Offered:</label>
      <input
        type='text'
        name='noOfCoursesAvailable'
        value={editedCollege.noOfCoursesAvailable}
        onChange={handleInputChange}
      />

      <label>Address:</label>
      <input
        type='text'
        name='instituteAddress'
        value={editedCollege.instituteAddress}
        onChange={handleInputChange}
      />

      
    </div>

    <div className='rediv' style={{ width: '40%', float: 'right', marginRight: '2vw' }}>
      <label>Email:</label>
      <input
        type='text'
        name='email'
        value={editedCollege.email}
        onChange={handleInputChange}
      />

      <label>Minimum Marks:</label>
      <input
        type='text'
        name='minimumMarks'
        value={editedCollege.minimumMarks}
        onChange={handleInputChange}
      />
      <label>Description:</label>
      <input
        type='text'
        name='instituteDescription'
        value={editedCollege.instituteDescription}
        onChange={handleInputChange}
      />
    </div>

    <br />
    <br />
<br/><br/>
<br></br><br></br>
    <div style={{ display: "flex", marginTop: "35vh" }}>
      <button style={{ marginRight: "1vw" ,backgroundColor:'#4d82ad' }}onClick={handleSaveClick}>Save</button>
<div style={{ width: '2vw' }}></div>
      <button onClick={() => setAddFormVisible(false)} style={{ backgroundColor: "grey" }}>Close</button>
    </div>
  </div>

)}

        {editFormVisible && selectedCollege && (
          <div className='college-form' style={{ width: '70vw' }}>
            <h2>Edit College Information</h2>
            <label>College Id:</label>
            <input
              type='text'
              name='instituteId'
              value={editedCollege.instituteId}
              onChange={handleInputChange}
            />
                <label>Image:</label>
            <input
              type='text'
              name='image'
              value={editedCollege.image}
              onChange={handleInputChange}
            />
            <label>Name:</label>
            <input
              type='text'
              name='instituteName'
              value={editedCollege.instituteName}
              onChange={handleInputChange}
            />
    <div className='lediv' style={{ width: '40%', float: 'left' }}>
      <label>Contact Number:</label>
      <input
        type='text'
        name='contactNumber'  // Corrected input name
        value={editedCollege.mobile}
        onChange={handleInputChange}
      />
      <label>Courses Offered:</label>
      <input
        type='number'  // Corrected input type
        name='coursesOffered'  // Corrected input name
        value={editedCollege.noOfCoursesAvailable}
        onChange={handleInputChange}
      />
      <label>Address:</label>
    </div>
    <div className='rediv' style={{ width: '40%', float: 'right', marginRight: '2vw' }}>
      <label>Email:</label>
      <input
        type='text'
        name='email'
        value={editedCollege.email}
        onChange={handleInputChange}
      />
     <label>Description:</label>
      <input
        type='text'
        name='instituteDescription'
        value={editedCollege.instituteDescription}
        onChange={handleInputChange}
      />
    </div>
    {/* Move the label above the address input field */}

    <input
      type='text'
      name='address'
      value={editedCollege.instituteAddress}
      onChange={handleInputChange}
    />

    <br></br><br></br>
    <div style={{ display: 'flex', marginRight: '0vh' }}>
              <button style={{ marginRight: '5vw' ,backgroundColor:'#4d82ad'}} onClick={handleUpdateClick}>
                Save
              </button>
              <div style={{ width: '10vw' }}></div>
              <button onClick={handleEditFormClose} style={{ backgroundColor: 'grey' }}>
                Close
              </button>
            </div>
          </div>
        )}
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AdminInstitute;
