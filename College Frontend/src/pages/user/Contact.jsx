import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import NavBar from '../../components/NavBar';

const Contact = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    username: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <>
      <header><NavBar/></header>
      <Grid container justify="center" alignItems="center" style={{ height: '100vh'}} marginLeft={'550px'}>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />

              <TextField
                label="Username"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />

              <TextField
                label="Message"
                id="message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
<br/><br/>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: '#f83e60', color: 'white' }}
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
