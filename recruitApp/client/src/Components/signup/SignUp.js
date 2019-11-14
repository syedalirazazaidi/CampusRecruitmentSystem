import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import { typography } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
// import { register } from './UserFunction'
import history from "./../../History"
// import CheckboxLabels from "./botton"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {register,comp_register} from "./UserFunction"
const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function SignUp() {
    const classes = useStyles();
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [email, setEmailname] = useState('');
    const [password, setPassword] = useState('');
    const [state, setChecked] = useState(false);
    const [set_iam,setIam] = useState('');
    const handleChange = (iam) => event => {
        // console.log(name, event.target.checked)
        setChecked(!state.setChecked);
        setIam(iam);
    };
    const handleFirstname = e => {
        setFirstname(e.target.value);
    };
    const handleLastname = e => {
        setLastname(e.target.value);
    };
    const handleEmail = e => {
        setEmailname(e.target.value);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newUser = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            user : set_iam
        }
        console.log(newUser)
        // if(newUser.user==="student")

        register(newUser).then(res => {
            console.log('signup Resp',res);
            history.push('/')
        })
        console.log("after",newUser)
        // if(newUser.user==="company")
        // comp_register(newUser).then(res => {
        //     console.log(`company data`,res);
        //     history.push('/')
        // })

       
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    SignUp
        </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                value={first_name}
                                onChange={handleFirstname}
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                variant="outlined"
                                required
                                fullWidth
                                value={last_name}
                                onChange={handleLastname}
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={handleEmail}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePassword}
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    {/* <span> <CheckboxLabels  /></span> */}
                   {/* Botton */}
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checked}
                                    onChange={handleChange('student', state.checked)}
                                    color="primary"
                                />
                            }
                            label="Student"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checked}
                                    onChange={handleChange('company')}
                                    color="primary"
                                />
                            }
                            label="Company"
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                  </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
