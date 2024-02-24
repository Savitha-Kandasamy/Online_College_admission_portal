// Institutes.js
import  { useEffect,useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../assets/css/Institutes.css';
import { useNavigate} from 'react-router-dom';

const Institutes = () => {
  const navigate = useNavigate();
  const collegesData = [
    {
      id: 1,
      name: 'College SKCET',
      address: '123 Main Street, City A',
      contactNumber: '123-456-7890',
      email: 'abc@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 70,
    },
    {
      id: 2,
      name: 'College SKCT',
      address: '456 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 75,
    },
    {
      id: 3,
      name: 'College ADC',
      address: '789 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 80,
    },{
      id: 4,
      name: 'College XYZ',
      address: '987 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 10,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 90,
    },
    {
      id: 4,
      name: 'College UVW',
      address: '987 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 10,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 90,
    },
    {
      id: 4,
      name: 'College PSG',
      address: '987 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 10,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 90,
    },
    {
      id: 4,
      name: 'College KCT',
      address: '987 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 10,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 90,
    },
    {
      id: 4,
      name: 'College CIT',
      address: '987 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 10,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 90,
    },  
    
    // Add more colleges as needed with additional details
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleEnrollInstitute= () => {
        navigate('/Courses');
    }
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

 const filteredColleges = collegesData.filter((college) =>
    college.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <>
      <header>  
        <NavBar />
      </header>
      <body className='ibody'>
        <input
          style={{ width: '500px', marginLeft: '100px', marginRight: '60px' }}
          type='text'
          placeholder='Search Colleges'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul className='iul'>
  {filteredColleges.map((college) => (
    <li key={college.id}>
      <div className='college-card'>
        <h3>{college.name}</h3>
        <button className='ienroll-button ' onClick={handleEnrollInstitute}>
          Enroll Now
        </button>
        <p className='address'>{college.address}</p>
        <div className='separator'></div>
        <section className='college-details'>
          <div className='row'>
            <div className='topic'>College ID:</div>
            <div className='content inline'>{college.id}</div>
          </div>
          <div className='row'>
            <div className='topic'>Courses Offered:</div>
            <div className='content inline'>{college.coursesOffered} courses</div>
          </div>
          <div className='row'>
            <div className='topic'>Fees:</div>
            <div className='content inline'>{college.fees}</div>
          </div>
          {/* Add more details here as needed */}
        </section>
        <div className='separator'></div>
        <section className='contact-details'>
          <div className='row'>
            <div className='topic'>Minimum Marks:</div><br/>
            <div className='content inline'>{college.minimumMarks}%</div>
          </div>
          <div className='row'>
            <div className='topic'>Contact Number:</div><br/>
            <div className='content inline'>{college.contactNumber}</div>
          </div>
          <div className='row'>
            <div className='topic'>Email Id:</div><br/>
            <div className='content inline'>{college.email}</div>
          </div>
        </section>
      </div>
    </li>
  ))}
</ul>
      </body>
      <br/><br/><br/><br/>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Institutes;