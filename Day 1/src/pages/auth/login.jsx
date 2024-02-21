import { useState } from 'react';
import '../../assets/css/userlogin.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import college from '../../assets/images/college.jpg';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [emailError, setEmailError] = useState('');

  const containerStyle = {
    backgroundImage: `url(${college})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '115%',
    height: '100vh',
    borderTopRightRadius: '350px',
    borderBottomRightRadius: '350px'
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Valid Email Address is Required');
      return;
    }

    // Additional validation for other fields if needed

    setEmailError('');
    console.log({
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    });

    // Only navigate if the validation is successful
    navigateToNavbar();
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const navigateToSignUp = () => {
    window.location.href = '/Signup';
  };

  const navigateToNavbar = () => {
    window.location.href = '/NavBar';
  };

  return (
    <div className="sign-in-container">
      <div style={containerStyle}></div>
      <div className="content-container">
        <div className="logo-container">
          <LockOutlinedIcon className="mui-logo" />
          <h1>LOGIN</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <TextField
            type="text"
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            required
            error={!!emailError}
            helperText={emailError}
            value={formData.email}
            onChange={handleChange}
            fullWidth
            InputProps={{
              style: { color: emailError ? 'red' : 'inherit' },
            }}
          />
          <br/><br/>
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            autoComplete="current-password"
            required
            value={formData.password}
            onChange={handleChange}
            fullWidth
          />
          <div className="remember-me-container">
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="submit-button">
            LOGIN
          </button>
          <br/><br/>
          <Grid container spacing={2} className="links-container">
            <Grid item xs={12} sm={6}>
              <div className="forgot-password-text">
                <a href="#" style={{ textDecoration: 'none' }}>
                  Forgot Password?
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="forgot-password-text">
                <div style={{ textAlign: 'center' }}>
                  Don't have an account?{' '}
                  <a href="#" onClick={navigateToSignUp}>
                    Sign Up
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </form>
        <p className="copyright-text">
          {'Copyright © '}
          <a href="https://mui.com/" className="link">
            Your Website
          </a>{' '}
          {new Date().getFullYear()}
          {'.'}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
