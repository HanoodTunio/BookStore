require('dotenv').config(); // Load .env variables

const express = require('express');
const connectDB = require("./config/connect"); // Import the fixed connection file

const app = express();

// Connect to MongoDB
connectDB(process.env.URL);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

