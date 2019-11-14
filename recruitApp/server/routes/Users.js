const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, Company, jobDetails,studentJobProfile } = require('../models/User.js');
users.use(cors())
process.env.SECRET_KEY = 'secret'
//////////// STUDENT SCHEMA
users.post('/register', (req, res) => {
  console.log('RREEQQ::', req.body)
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    user: req.body.user
  }
  console.log('userdata from server', userData)
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' : Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
/////////////COMPANY SCHEMA
users.post('/comp_register', (req, res) => {
  console.log("data : ", req.body)
  const companyData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    user: req.body.user,
    type: req.body.type,
  }
  console.log('userdata from server', companyData)
  Company.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log("us user : ", user);
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          console.log("error", err);
          console.log("sds", user)
          companyData.password = hash
          Company.create(companyData)
            .then(user => {
              res.json({ status: user.email + ' : Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      console.log("sdsdsd", err)
      res.send('error: ' + err)
    })
})
users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log('server user:', user)
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not ..exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
users.post('/login', (req, res) => {
  Company.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log('server user:', user)
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,

          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


users.post('/profile', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  var email = req.body.email;
  console.log("usmanemail :", req.body.email)
  User.findOne({
    email: email
  })
    .then(user => {
      console.log("usman :", user)
      if (user) {
        res.json(user)
      } else {
        res.send('User does not-exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
users.post('/comp_profile', (req, res) => {
  const jobdetails = new jobDetails(req.body);
  jobdetails.save()
    .then(jobdetails => {
      res.json('Server added successfully');
    }).catch(err => {
      res.status(400).send("unable to save to database");
    });

});
users.get('/comp_profile', function (req, res) {
  jobDetails.find(function (err, jobdetails) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(jobdetails);
    }
  });
});
users.delete('/comp_profile/delete/:id', async (req, res) => {
  const message = await jobDetails
    .findOneAndDelete(req.params.id)
    .then(() => 'List deleted');

  res.json({ message });
});
//////STUDENT PROFILE/////
users.post('/postkardabhai', 
(req, res) => {
  const studentjobProfile = new studentJobProfile(req.body);
  studentjobProfile.save()
    .then(studentjobProfile => {
      res.json('Server added successfully');
    }).catch(err => {
      res.status(400).send("unable to save to database");
    });

});
 //{
  // console.log('student  for apply job',req.body)
  // const studentJob = {
  //   student_name: req.student_name,
  //     qualification:req.qualification,
  //     student_cgpa: req.student_cgpa,
  // }
// console.log('student all details')
//   const studentjobprofiles = new studentJobProfile(req.body);
//   studentjobprofiles.save()
//     .then(studentjobprofile => {
//       res.json('Server added successfully');
//     }).catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });

module.exports = users  
