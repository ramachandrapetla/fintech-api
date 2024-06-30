
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

const app = express();

// Enable CORS
app.use(cors());

// Set security headers with Helmet
app.use(helmet());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.send('Server is healthy');
});

// Other security-related middleware can be added here
// Your routes and other middleware can be added here
require('./routes')(app);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
