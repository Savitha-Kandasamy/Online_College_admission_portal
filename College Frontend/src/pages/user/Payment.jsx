import "../../assets/css/Payment.css";
import NavBar from "../../components/NavBar";

export default function Payment() {
  const handleConfirmButtonClick = () => {
    alert("Payment confirmed!"); // Display a simple alert message

  };
  return (
    <>
    <header>
        <NavBar/>
    </header>
    
    <div className="ppayment-container">
      <div className="ppayment-card">
        <div className="text-center mb-4">
        <h1>Payment</h1>
        </div>
        <h3 className="fw-bold mb-4 pb-2">Cards : </h3>
        <div className="pcard-details mb-4 pb-1">
          <img className="pcard-logo" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" />
          <div className="pcard-info">
          <input type="text" className="pform-control mb-3" placeholder="**** **** **** 3943"  />
          </div>
          <a href="#!" className="premove-card">Remove card</a>
        </div>
        <div className="pcard-details mb-4 pb-1">
          <img className="pcard-logo" src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
          <div className="pcard-info">
          <input type="text" className="pform-control mb-3" placeholder="**** **** **** 4214"/>
          </div>
          <a href="#!" className="premove-card">Remove card</a>
        </div>
        <h3 className="fw-bold mb-4">Payment Details : </h3>
        <input type="text" className="pform-control mb-3" placeholder="Cardholder's Name"  /><br/>
        <div className="pform-row mb-4">
          <input type="text" className="pform-control col-7 " placeholder="Card Number"  />
          <input type="date" className="pform-control col-7" placeholder="Expire" />
          <input type="password" className="pform-control col-7" placeholder="CVV" />
        </div>
        <button  onClick={handleConfirmButtonClick} 
                      className='penroll-button'>
                        Add Course
                    </button>
      </div>
    </div>
    </>
  );
}
