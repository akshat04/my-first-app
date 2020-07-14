const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
const db_link = "mongodb://localhost:27017/first_db";

mongoose.connect(db_link, function (err) {
     if (err)
         console.error("Error occurred while connecting to DB!");
     else
         console.log("Database connection established successfully");
});

app.get('/homepage', function(req, res) {
       res.send("Hello, World! I am Akshat Shrivastava and this is my first backend api develoopment ");
});

app.listen(port,()=> console.log('app running successfuly on port number ${port}...'));