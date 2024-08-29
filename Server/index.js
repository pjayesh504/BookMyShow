const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dburl = "mongodb://pjayesh504:Jayesh12345@ookMyShow/?ssl=true&replicaSet=atlas-xfdlxa-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BookMyShow"

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

mongoose.connect(dburl).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});