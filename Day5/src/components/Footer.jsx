
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <>
<footer className="footer-distributed">

			<div className="footer-left">

				<h3 id="fcompany">Edu-GateWay</h3>

				<p className="footer-links">
				Plan Your Future With Us
				</p>

				<p className="footer-company-name">Edu-Gateway © 2024</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>123,ABC street</span>Kuniamuthur,Coimbatore</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 6374140578</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">edugate@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
                    <br></br>
                    Empower Your Ambitions: Envision, Apply, Achieve - Your College Journey Starts Now
				</p>



			</div>

		</footer></>
  );
      }


export default Footer;