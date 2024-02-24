// import React, { useState } from 'react';
// import AdminSidebar from '../../components/Adminsidebar';

// const AdminDashboard = () => {
//   const [colleges, setColleges] = useState([]);
//   const [collegeName, setCollegeName] = useState('');
//   const [courseName, setCourseName] = useState('');
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('');

//   const addDetails = () => {
//     if (
//       collegeName.trim() !== '' &&
//       courseName.trim() !== '' &&
//       userName.trim() !== '' &&
//       userEmail.trim() !== ''
//     ) {
//       const newCollege = {
//         id: Date.now(),
//         name: collegeName,
//         courses: [{ id: Date.now(), name: courseName }],
//         users: [{ id: Date.now(), name: userName, email: userEmail }],
//       };

//       setColleges([...colleges, newCollege]);
//       setCollegeName('');
//       setCourseName('');
//       setUserName('');
//       setUserEmail('');
//     }
//   };

//   const styles = {
//     container: {
//       margin: '20px',
//       fontFamily: 'Arial, sans-serif',
//     },
//     h2: {
//       textAlign: 'left',
//       color: '#333',
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       marginBottom: '15px',
//       boxSizing: 'border-box',
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//     },
//     button: {
//       backgroundColor: '#f83e60',
//       color: 'white',
//       padding: '12px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       marginRight: '5px',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       marginTop: '20px',
//     },
//     th: {
//       backgroundColor: 'darkgray',
//       color: 'white',
//       padding: '20px',
//       textAlign: 'left',
//       borderBottom: '1px solid #ddd',
//     },
//     td: {
//       padding: '15px',
//       borderBottom: '1px solid #ddd',
//     },
//     editButton: {
//       backgroundColor: '#3498db',
//       color: 'white',
//       padding: '8px',
//       border: 'none',
//       borderRadius: '3px',
//       cursor: 'pointer',
//     },
//   };

//   return (
//     <>
//     <AdminSidebar/>
//     <div style={styles.container}>
//       <div>
//         <h2 style={styles.h2}>Details Form</h2>
//         <input
//           type="text"
//           placeholder="College Name"
//           value={collegeName}
//           onChange={(e) => setCollegeName(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Course Name"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="User Name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="email"
//           placeholder="User Email"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={addDetails} style={styles.button}>
//           Add Details
//         </button>
//       </div>

//       <h2 style={styles.h2}>Dashboard</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr style={styles.th}>
//             <th>Colleges</th>
//             <th>Courses</th>
//             <th>Users</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {colleges.map((college) => (
//             <tr key={college.id} style={styles.td}>
//               <td>{college.name}</td>
//               <td>
//                 {college.courses.map((course) => (
//                   <div key={course.id}>{course.name}</div>
//                 ))}
//               </td>
//               <td>
//                 {college.users.map((user) => (
//                   <div key={user.id}>{user.name}</div>
//                 ))}
//               </td>
//               <td>
//                 <button style={styles.editButton}>
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// };

// export default AdminDashboard;


import React, { useState } from 'react';
import AdminSidebar from '../../components/Adminsidebar';

const AdminDashboard = () => {
  const [colleges, setColleges] = useState([]);
  const [collegeName, setCollegeName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [hover, setHover] = useState(false); // State to track hover

  const addDetails = () => {
    if (
      collegeName.trim() !== '' &&
      courseName.trim() !== '' &&
      userName.trim() !== '' &&
      userEmail.trim() !== ''
    ) {
      const newCollege = {
        id: Date.now(),
        name: collegeName,
        courses: [{ id: Date.now(), name: courseName }],
        users: [{ id: Date.now(), name: userName, email: userEmail }],
      };

      setColleges([...colleges, newCollege]);
      setCollegeName('');
      setCourseName('');
      setUserName('');
      setUserEmail('');
    }
  };

  const styles = {
    container: {
      margin: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    h2: {
      textAlign: 'left',
      color: '#333',
      borderBottom: '2px solid #3498db',
      paddingBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      backgroundColor: '#f83e60',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '5px',
      transition: 'background-color 0.3s ease',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: 'darkgray',
      color: 'white',
      padding: '20px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #ddd',
    },
    editButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '8px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    editButtonHover: {
      backgroundColor: '#267bb5',
    },
  };

  return (
    <>
      <AdminSidebar />
      <div style={styles.container}>
        <div>
          <h2 style={styles.h2}>Details Form</h2>
          <input
            type="text"
            placeholder="College Name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="User Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={() => {
              addDetails();
              setHover(false);
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ ...styles.button, ...(hover ? styles.editButtonHover : {}) }}
          >
            Add Details
          </button>
        </div>

        <h2 style={styles.h2}>Dashboard</h2>
        <table style={styles.table}>
          <thead>
            <tr style={styles.th}>
              <th>Colleges</th>
              <th>Courses</th>
              <th>Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <tr key={college.id} style={styles.td}>
                <td>{college.name}</td>
                <td>
                  {college.courses.map((course) => (
                    <div key={course.id}>{course.name}</div>
                  ))}
                </td>
                <td>
                  {college.users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                  ))}
                </td>
                <td>
                  <button style={styles.editButton}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
