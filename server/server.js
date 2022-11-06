const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

// Express JSON Middleware
app.use(express.json());

// CORS
app.use(cors());

// .ENV for accessing files
dotenv.config();

// Connecting to MongoDB
mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('DB Running...');
	}
);

// Routes
app.get('/', (req, res) => {
	res.send('Everything working fine!');
});

// API Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
