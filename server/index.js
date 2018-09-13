const express = require('express');
const morgan = require('morgan');

const { mongoose } = require('./database');

const app = express();

// settings
app.set('port', process.env.PORT || 3001);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes 
app.use('/api/employees/',require('./routes/employee.routes'));   

// start server
app.listen(app.get('port'), () => {
    console.log('Server in port ',app.get('port'));
});