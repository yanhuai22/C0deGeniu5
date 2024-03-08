const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to CodeGenius! Take your programming skills to the next level with our comprehensive curriculum and expert instructors.');
});

app.get('/curriculum', (req, res) => {
  res.send('Learn everything you need to know about software development and programming languages with our comprehensive curriculum.');
});

app.get('/instructors', (req, res) => {
  res.send('Get expert guidance from our experienced instructors and take your programming skills to the next level.');
});

app.get('/register', (req, res) => {
  res.send('Ready to become a CodeGenius? Register for our platform today and start your programming journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('CodeGenius server is running on port 3000.');
});