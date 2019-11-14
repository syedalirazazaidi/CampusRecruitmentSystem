import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {company_Data} from './signup/UserFunction'
import history from './../History'
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function CompanyAppBar() {
  const classes = useStyles();
  const [comp_name, setCompname ] = useState('');
  const [comp_name1, setCompname1] = useState('');
  const [comp_name2, setCompname2] = useState('');
  const handleCompname = e => {
    setCompname(e.target.value);
};
const handleCompname1 = e => {
  setCompname1(e.target.value);
};
const handleCompname2 = e => {
  setCompname2(e.target.value);
};
const handleSubmit = (evt) => {
  evt.preventDefault();
   const newUser = {
    comp_name: comp_name,
    comp_name1:comp_name1,
    comp_name2 :comp_name2
   }
   console.log(newUser);
 
  // alert('the detail was submitted')
  company_Data(newUser).then(res => {
  console.log('company data inserted :',res);
  history.push('/companyalldata');
  })
}
  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <div>
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Company Name"
          margin="normal"
          type="text"
          name = "comp_name"
          value={comp_name}
          onChange={handleCompname}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Job Description"
          margin="normal"
          name = "comp_name1"
          value={comp_name1}
          onChange={handleCompname1}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Job Requirement"
          margin="normal"
          name = "comp_name2"
          value={comp_name2}
          onChange={handleCompname2}
        />
      </div>
      <br/>
      <Button variant="outlined" color="secondary" className={classes.button}
      method = "POST"
      type = "submit"
       >
        POST
      </Button>
      </div>
      
    </form>
  );
}
