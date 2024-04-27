import { useEffect } from 'react';
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

useEffect(() => {
  // Fetch the user email and token from local storage
  const user = JSON.parse(localStorage.getItem('user'))

  // If the token/email does not exist, mark the user as logged out
  if (!user || !user.token) {
    setLoggedIn(false)
    return
  }

  // If the token exists, verify it with the auth server to see if it is valid
  fetch('http://localhost:3000/verify', {
    method: 'POST',
    headers: {
      'jwt-token': user.token,
    },
  })
    .then((r) => r.json())
    .then((r) => {
      setLoggedIn('success' === r.message)
      setEmail(user.email || '')
    })
}, [])
