import  { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import '../../assets/css/Institutes.css';
import { useNavigate } from 'react-router-dom';
import skcet from '../../assets/images/skcet.jpg';
import psg from '../../assets/images/psg.jpg';
import kumaraguru from '../../assets/images/kumaraguru.jpg';

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
      image: skcet,
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
      image: psg,
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
      image : kumaraguru
    },
    {
      id: 4,
      name: 'College ADC',
      address: '789 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks: 80,
      image : kumaraguru
    },
    {
      id: 4,
      name: 'College ADC',
      address: '789 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks:80,
      image : kumaraguru
    },
    {
      id: 5,
      name: 'College ADC',
      address: '789 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks:80,
      image : kumaraguru
    },
    {
      id: 6,
      name: 'College ADC',
      address: '789 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks:80,
      image : kumaraguru
    },
    {
      id: 7,
      name: 'College ADC',
      address: '789 Oak Avenue, City B',
      contactNumber: '987-654-3210',
      email: 'xyz@gmail.com',
      coursesOffered: 12,
      fees: 'Rs.100,000 - Rs.150,000',
      minimumMarks:80,
      image : kumaraguru
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleEnrollInstitute = () => {
    navigate('/Courses');
  };

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
                <img src={college.image} alt={`${college.name} Logo`} />
                <div className='card-content'>
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
                  </section>
                  <div className='separator'></div>
                  <section className='contact-details'>
                    <div className='row'>
                      <div className='topic'>Minimum Marks:</div>
                      <div className='content inline'>{college.minimumMarks}%</div>
                    </div>
                    <div className='row'>
                      <div className='topic'>Contact Number:</div>
                      <div className='content inline'>{college.contactNumber}</div>
                    </div>
                    <div className='row'>
                      <div className='topic'>Email Id:</div>
                      <div className='content inline'>{college.email}</div>
                    </div>
                  </section>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </body>
      <br /><br />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Institutes;
