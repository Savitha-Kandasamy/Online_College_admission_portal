import "../../assets/css/Profile.css";
import  { useState } from 'react';
// import Uhome from '../../assets/images/Uhome.jpg';
import NavBar from "../../components/NavBar";
export default function ProfilePage() {
  const containerStyle = {
    // backgroundColor: 'rgb(150, 144, 144)',
    fontfamily:'Times New Roman, Times, serif',
    minHeight: '99vh', 
    zIndex:'0',
    opacity:'2',
    color:'black'
  };

  const cardImageStyle = {
    width: '350px',
    border: '3.5px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginleft: '0px'
    
  };

  const listItemStyle = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'right',
    padding: '0.35rem',
    // border: '3px solid #ccc',
    borderRadius: '8px',
    margin: '8px 0',
    listStyleType: 'none'
  };

  const cardTextStyle = {
    fontSize: '0.84rem',
  };

  const cardBody = {
    // border: '3px solid #ccc',
    borderRadius: '8px',
    padding: '5px',
    margin: '0px 0',
    width: '100%',
  };
  const cardBodyStyle = {
    border: '3px solid #ccc',
    borderRadius: '8px',
    padding: '8px',
    margin: '0px 0',
    width: '80%',
  };
  const tableStyle = {
    width: '80%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    borderRadius:'8px'
  };

  const thTdStyle = {
    border: '3px solid #ccc',
    padding: '8px',
    textAlign: 'center',
    borderRadius: '8px',
  };
  const editButtonStyle = {
    position: 'relative',
    bottom: '0px',
    left: '15%',
    transform: 'translateX(50%)',
    backgroundcolor:'darkgrey'
  };
  const [currentView, setCurrentView] = useState();

  const handleReceivedButtonClick = () => {
    setCurrentView('received');
  };

  const handlePendingButtonClick = () => {
    setCurrentView('pending');
  };

  return (
    
    <section style={containerStyle}>
      <header>
        <NavBar />
      </header>
      <div className="py-5">
        <div className="row">
        <div className="col-lg-4 d-flex justify-content-center">
            <div className="mb-4" style={cardImageStyle}>
                 
              <div className="text-center">
                <img
                  src="https://www.creativefabrica.com/wp-content/uploads/2021/05/26/Man-avatar-icon-vector-flat-Graphics-12541925-1-1-580x387.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '50%' }}
                  
                />
                <p className="text-weight mb-1 ">SUDHAN R</p>
                <p className="text-weight mb-4">ENGINEERING APPLICANT</p>
               
</div>
            <div className="mb-4 mb-lg-0" style={cardBody}>
              <ul className="list-group list-group-flush rounded-3">
                <li style={listItemStyle}>
                  <i></i>
                  <p style={cardTextStyle}>FULL NAME : SUDHAN RAMKUMAR</p>
                </li>
                <li style={listItemStyle}>
                  <i className="fas fa-globe fa-lg text-muted"></i>
                  <p style={cardTextStyle}>EMAIL : sudhan@gmail.com</p>
                </li>
                <li style={listItemStyle}>
                  <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                  <p style={cardTextStyle}>PHONE : 6374140758</p>
                </li>
                <li style={listItemStyle}>
                  <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                  <p style={cardTextStyle}>CUT-OFF: 193</p>
                </li>
              </ul>
            </div>
            <br/>
              <button className="Penroll-button" style={editButtonStyle}>
                  Edit Profile
                </button>
          </div>
          </div>
          <div className="col-lg-8  justify-content-center">
            <div className="mb-4" style={cardBodyStyle}>
              <div className="row">
                <div className="col-sm-3">
                  <p>SCHOOL</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-weight">SVB HIGHER SECONDARY SCHOOL</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p>FATHER NAME</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-weight">RAMKUMAR S</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p>MOTHER NAME</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-weight">MONISHA R</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p>ADDRESS</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-">123, ABC STREET, KUNIAMUTHUR, COIMBATORE</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="text-center mb-3">
      <div className="d-flex justify-content-start gap-3">
        <button className="Penroll-button" onClick={handleReceivedButtonClick}>
          Request Received
        </button>
        <button className="Penroll-button" onClick={handlePendingButtonClick}>
          Request Pending
        </button>
      </div>
    </div>
<br/>
            
            
                  <div className="col-md-12">
              {currentView === 'received' && (
                <>
                    <h3>CURRENT STATUS</h3>
                    <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Serial Number</th>
                    <th style={thTdStyle}>College</th>
                    <th style={thTdStyle}>Cutoff Range</th>
                    <th style={thTdStyle}>Department</th>
                    <th style={thTdStyle}>Accept</th>
                    <th style={thTdStyle}>Decline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={thTdStyle}>1</td>
                    <td style={thTdStyle}>Sri Krishna college of engineering</td>
                    <td style={thTdStyle}>190-195</td>
                    <td style={thTdStyle}>CSE</td>
                    <td style={thTdStyle}>
                      <button className="btn btn-success">Accept</button>
                    </td>
                    <td style={thTdStyle}>
                      <button className="btn btn-danger">Decline</button>
                    </td>
                  </tr>
                  <tr>
                    <td style={thTdStyle}>2</td>
                    <td style={thTdStyle}>Coimbatore Institute of Technology</td>
                    <td style={thTdStyle}>191-193</td>
                    <td style={thTdStyle}>IT</td>
                    <td style={thTdStyle}>
                      <button className="btn btn-success">Accept</button>
                    </td>
                    <td style={thTdStyle}>
                      <button className="btn btn-danger">Decline</button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
              </>
            )}
                  </div>

              {currentView === 'pending' && (
                <>
                  <div className="col-md-12">
                    <h3>STATUS PENDING</h3>
                    <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Serial Number</th>
                    <th style={thTdStyle}>College</th>
                    <th style={thTdStyle}>Cutoff Range</th>
                    <th style={thTdStyle}>Department</th>
                    <th style={thTdStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={thTdStyle}>1</td>
                    <td style={thTdStyle}>Sri Krishna college of engineering</td>
                    <td style={thTdStyle}>190-195</td>
                    <td style={thTdStyle}>CSE</td>
                    <td style={thTdStyle}>Pending...</td>
                  </tr>
                  <tr>
                    <td style={thTdStyle}>2</td>
                    <td style={thTdStyle}>Coimbatore Institute of Technology</td>
                    <td style={thTdStyle}>191-193</td>
                    <td style={thTdStyle}>IT</td>
                    <td style={thTdStyle}>Pending...</td>
                  </tr>
                  <tr>
                    <td style={thTdStyle}>3</td>
                    <td style={thTdStyle}>Government college of engineering</td>
                    <td style={thTdStyle}>192</td>
                    <td style={thTdStyle}>EEE</td>
                    <td style={thTdStyle}>Pending...</td>
                  </tr>
                  
                </tbody>
              </table>
                  </div>
                </>
              )}
            </div>
          </div>
          </div>
    </section>
  );
}
