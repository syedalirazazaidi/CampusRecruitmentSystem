import axios from 'axios'
export const register = newUser => {
  console.log('funciton console::', newUser)
  return axios
    .post('http://localhost:5000/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      user: newUser.user
    })
    .then((response) => {
      console.log('res::', response)
      console.log('Registered')
    })
}
//COMPANY DATA
export const company_Data = newUser => {
  console.log('Company data here', newUser)
  return axios
    .post('http://localhost:5000/comp/comp_profile', {
      comp_name: newUser.comp_name,
      comp_name1: newUser.comp_name1,
      comp_name2: newUser.comp_name2
    })
    .then((response) => {
      console.log('the company data has been inserted', response)
    })
}
/////////////REGISTER
export const comp_register = newUser => {
  console.log('funciton console::', newUser)
  return axios
    .post('http://localhost:5000/users/comp_register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      user: newUser.user
    })
    .then(response => {
      console.log(`Copany Detail`, response)
      console.log('Company_Registered')
    }).catch(err => {
      console.log('axios error:', err)
    })
}
export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password,
      // user : user.set_iam ,
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getUser = user => {
  console.log(user);
  return axios
    .post('http://localhost:5000/users/profile', {
      email: user.email
    })
    .then(response => {
      // localStorage.setItem('usertoken', response.data)
      console.log("my rspo : ", response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

/////////////////STUDENT PROFILE///////////
export const getStudentData = userData => {
  console.log("hello", userData);
  return axios
    .post('http://localhost:5000/users/postkardabhai', {
      student_name: userData.student_name,
      qualification: userData.qualification,
      student_cgpa: userData.student_cgpa,
    })
    .then(response => {
      // localStorage.setItem('usertoken', response.data)
      console.log("student job details from  : ", response)
      return response.data
    })
    .catch(err => {
      console.log("error while post ",err)
    })
}


