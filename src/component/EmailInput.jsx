import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate the email using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setError(!emailPattern.test(inputEmail));
  };

  const handleClose = () => {
    setShowErrorMessage(false); // Reset error message
    setShowSuccessMessage(false); // Reset success message
  };

  const handleButtonClick = () => {
   // setShowErrorMessage(false); // Reset error message on button click
    setShowSuccessMessage(false); // Reset success message on button click

    if (!error) {
      // Email is correctly formatted
      setShowSuccessMessage(true);
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={handleEmailChange}
        error={error && showErrorMessage}
        helperText={error && showErrorMessage ? 'Invalid email format' : ''}
        required
      />
      <Button variant="contained" sx={{ mt: 4}} onClick={handleButtonClick}>
        Subscribe to newsletter
      </Button>

      <Dialog open={showSuccessMessage} onClose={handleClose}>
        <DialogTitle className='text-3xl'>Thanks for Subscribing!</DialogTitle>
        <DialogContent>
          <DialogContentText className="text-[#445069]">
            A confirmation email has been sent to {email}. Please open it and and click the button inside to confirm your subscription. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Dismiss Message
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmailInput;
