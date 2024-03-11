import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import college from "../../assets/images/college.jpg";
import "../../assets/css/register.css";
import axios from 'axios';



const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    passwordMatchError: false,
    emailError: "",
    mobileError: "",
    passwordStrengthError: "",
    passwordStrengthColor: "",
    role: "",
  });

 

  const containerStyle = {
    backgroundImage: `url(${college})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "115%",
    height: "100vh",
    borderTopRightRadius: "350px",
    borderBottomRightRadius: "350px",
  };

  const checkPasswordStrength = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const evaluatePasswordStrength = (password) => {
    if (password === "") {
      return { strength: "", color: "" };
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);

    if (password.length < 8 || !hasLetters || !hasDigits) {
      return { strength: "Weak", color: "red" };
    }

    return { strength: "Strong", color: "green" };
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    const { strength, color } = evaluatePasswordStrength(newPassword);
    setFormData((prevData) => ({
      ...prevData,
      password: newPassword,
      passwordStrengthError: strength,
      passwordStrengthColor: color,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = async (event) => {
 
    event.preventDefault();
    //const navigate=useNavigate();
    let errors = {};

    if (formData.password !== formData.confirmPassword) {
      errors = { ...errors, passwordMatchError: true };
    }

    if (!checkPasswordStrength(formData.password)) {
      errors = {
        ...errors,
        passwordStrengthError:
          "Password should include 8 characters, one letter, and one digit",
      };
    }

    if (!validateEmail(formData.email)) {
      errors = { ...errors, emailError: "Valid Email Address is Required" };
    }
    
    if (!validateMobile(formData.mobileNumber)) {
      errors = { ...errors, mobileError: "Mobile Number holds 10 digits" };
    }
    
    if (Object.keys(errors).length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        ...errors,
      }));
    }
  
    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:2020/api/users/new',{
      username: formData.firstname,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      password: formData.password,
      userRole: formData.role,
    });
      console.log('User created successfully:', response.data);
  
      // Redirect to the appropriate page based on the selected role
      if (formData.role === 'admin') {
        window.location.href="./AdminHome";
      } else if (formData.role === 'user') {
        window.location.href="./UserHome";
      }
    } catch (error) {
      console.error('Error creating user:', error.response.data);
     
    }
    console.log(true);

    setFormData((prevData) => ({
      ...prevData,
      passwordMatchError: false,
      passwordStrengthError: "",
      emailError: "",
      mobileError: "",
    }));
    
      
  };

  const handleChange = (event, name) => {
    const { value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "rememberMe" ? checked : value,
    }));
  };

 

  return (
    <div className="sign-in-container">
      <div style={containerStyle}></div>
      <div className="content-container">
        <div className="logo-container">
          <LockOutlinedIcon className="mui-logo" />
          <h1 >SIGN UP</h1>
        </div>
        <br />
        <form onSubmit={handleSubmit} className="form-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="firstname"
                name="firstname"
                label="First Name"
                autoComplete="firstname"
                required
                value={formData.firstname}
                onChange={(e) => handleChange(e, "firstname")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="lastname"
                name="lastname"
                label="Last Name"
                autoComplete="lastname"
                required
                value={formData.lastname}
                onChange={(e) => handleChange(e, "lastname")}
                fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <TextField
            type="text"
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            required
            error={!!formData.emailError}
            helperText={formData.emailError}
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
            fullWidth
            InputProps={{
              style: { color: formData.emailError ? "red" : "inherit" },
            }}
          />
          <br />
          <br />
          <TextField
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            label="mobile number"
            autoComplete="mobile"
            required
            error={!!formData.mobileError}
            helperText={formData.mobileError}
            value={formData.mobileNumber}
            onChange={(e) => handleChange(e, "mobileNumber")}
            fullWidth
            InputProps={{
              style: { color: formData.mobileError ? "red" : "inherit" },
            }}
          />
          <br />
          <br />
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handlePasswordChange}
            fullWidth
          />
          <br />
          <br />
          <TextField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            autoComplete="new-password"
            required
            error={formData.passwordMatchError}
            helperText={formData.passwordMatchError ? "Passwords do not match" : ""}
            value={formData.confirmPassword}
            onChange={(e) => handleChange(e, "confirmPassword")}
            fullWidth
          />
          <p className="password-strength-error" style={{ color: formData.passwordStrengthColor }}>
            {formData.passwordStrengthError}
          </p>
          <TextField
            select
            id="role"
            name="role"
            label="Role"
            required
            value={formData.role}
            onChange={(e) => handleChange(e, "role")}
            fullWidth
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <br />
          <br />
          <button type="submit" onClick={handleSubmit} className="submit-button">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
