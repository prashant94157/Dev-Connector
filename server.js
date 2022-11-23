const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv');

dotenv.config();

//connect database
connectDB();

app.use(express.json());
app.use(cors());
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
