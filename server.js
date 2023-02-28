let express = require('express');
const connectDB = require('./config/db')

const port = process.env.PORT || 8080;
const cocktails = require('./routes/recipes');

const app = express();

app.use('/cocktails', cocktails)


connectDB();

app.get('/', (req, res) => res.send('Jello world!'));




app.listen(port, () => console.log(`Server listening on port: ${port}`));