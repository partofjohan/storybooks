const express = require('express');
const dotenv = require('dotenv');   //Loads environment variables into process.env
const connectDB = require('./config/db');
const morgan = require('morgan');   //HTTP request logger middleware
const handlebars = require('express-handlebars');
const routes = require('./routes/index');
const path = require('path');

dotenv.config({ path: './config/config.env' });  //object with the config file path

connectDB();

const app = express();

//If development mode is executed
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('env'));
}

//Handlebars
app.engine('.hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});