const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const dburl = "mongodb+srv://pjayesh504:Jayesh12345@bookmyshow.6lr6e.mongodb.net/BookMyShow?retryWrites=true&w=majority&appName=BookMyShow";

app.use(express.json());


mongoose.connect(dburl).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


app.use('/api/users',userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});