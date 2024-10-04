const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// User Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
