import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {getStudentData} from './signup/UserFunction'
import history from '../History'
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default function StudentHeaders() {
    const classes = useStyles();
    const [student_name, setStudent_name] = useState('');
    const [qualification, setQualification] = useState('');
    const [student_cgpa, setStudent_cgpa] = useState('');
    const handleStudent_name = e => {
        setStudent_name(e.target.value);
    };
    const handlequalification = e => {
        (setQualification(e.target.value))

    };
    const handleStudent_cgpa = e => {
        setStudent_cgpa(e.target.value);
    };
    const handleSubmit = (evt) => {
        console.log('studetn complete  detail');
        evt.preventDefault();
        const userData = {
            student_name,
            qualification,
            student_cgpa
        }
        console.log(userData);
        alert('the detail was submitted')
        getStudentData(userData)
            .then(res => {
                console.log('company data inserted :', res);
                  history.push('/companyalldata');
            })
     }
    return (
        <div className={classes.container} align='center'>
            <div>
                <Paper className={classes.root} align='center'>
                    <Typography variant="h5" component="h3">
                        <Typography component="p">
                            <h2>Add profile!</h2>
                        </Typography>
                        <form onSubmit={handleSubmit} >
                            <TextField
                                id="standard-full-width"
                                style={{ margin: 8 }}
                                placeholder="Full Name"
                                fullWidth
                                margin="normal"
                                name="student_name"
                                value={student_name}
                                onChange={handleStudent_name}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-full-width"
                                style={{ margin: 8 }}
                                placeholder="Qualification With Major Subject "
                                fullWidth
                                name="qualification"
                                margin="normal"
                                value={qualification}
                                onChange={handlequalification}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-full-width"
                                style={{ margin: 8 }}
                                placeholder="Last Exam CGPA"
                                fullWidth
                                margin="normal"
                                name="student_cgpa"
                                value={student_cgpa}
                                onChange={handleStudent_cgpa}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <Button type="submit" color="primary" method="POST">
                                Submit
                        </Button>
                        </form>
                    </Typography>
                </Paper>
            </div>
        </div>
    );
}

