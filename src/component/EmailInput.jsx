import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate the email using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setError(!emailPattern.test(inputEmail));
  };

  const handleButtonClick = () => {
    setShowErrorMessage(true);
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
      />
      <Button variant="contained" sx={{ padding: 1, mt: 4}} onClick={handleButtonClick}>
        Subscribe to my monthly newsletter
      </Button>
    </div>
  );
};

export default EmailInput;
