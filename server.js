import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();

// Additional logging information
app.use(morgan('dev'));

// Basic routing to start with
app.get('/', function (req, res) {
    res.json({
        success: true,
        fact: 'Octopus are very cool'
    })
});

dotenv.config();

// App listening on port 3000
app.listen(3000);