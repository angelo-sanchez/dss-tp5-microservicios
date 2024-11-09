var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { PORT } = require("./env.js");

var studentsRouter = require('./src/routes/students.js');
const pool = require('./src/db/database.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/students', studentsRouter);


app.listen(PORT, async () =>  {
    
    console.log(`Server started on http://localhost:${PORT}`);
  });

module.exports = app;
