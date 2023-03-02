const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');
const cocktails = require('./routes/recipes');

const app = express();

const port = process.env.PORT || 8080;


connectDB();

// Cors
app.use(cors({ origin: true, credentials: true }));
// Init middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('Jello world!'));

// Routes
app.use('/cocktails', cocktails)

app.listen(port, () => console.log(`Server listening on port: ${port}`));