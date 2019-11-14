
const dbConfig = require('./config/config.js');
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())
var Users = require('./routes/Users')
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
// const dbconfig = { useNewUrlParser: true, };
mongoose.connect(dbConfig.url, { useNewUrlParser: true, }).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});
app.use('/comp',Users)
app.use('/users', Users)
//app.use('/std',Users)
app.listen(port, function () {
  console.log('Server is running on... port: ' + port)
})