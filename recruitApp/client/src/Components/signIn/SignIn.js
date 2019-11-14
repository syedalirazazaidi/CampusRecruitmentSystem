
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
// import Company from '../Company';
import AdminPanel from '../AdminPanel';
import history from "../../History"
// import SignUp from "../signup/SignUp"
import { login, getUser } from "./../signup/UserFunction"
// import CheckboxLabels from "./../signup/botton"
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    background: {
        backgroundColor: 'yellow'
    }
}));

export default function SignIn() {
    const classes = useStyles();
    console.log(React.version)
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    // const [state, setChecked] = useState(false);
    // const [set_iam, setIam] = useState('');
    // const handleChange = (iam) => event => {
    //     // console.log(name, event.target.checked)
    //     setChecked(!state.setChecked);
    //     setIam(iam);
    // };
    const handleOnChangeEmail = (e) => {
        setemail(e.target.value)
    }
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted")
        const newUser = {
            email: email,
            password: password,
            //  user: set_iam

        }

        //console.log("h1 reponse : ",newUser)
        var currentUser = {}
        getUser(newUser)
        .then(res => {
            console.log("h reponse : ", res)
            currentUser = res

        //console.log(Userdata)
        if (currentUser.user === 'student') {
            console.log('enters student block')
            login(newUser).then(res => {
                console.log(res);
                // if (!res.error) 
                { history.push('/student') }
                // else alert('Login Failed!')
            })
        }
        if (currentUser.user === "company") {
            console.log('enters company block')
            login(newUser).then(res => {
                console.log(res);
                if (!res.error) { history.push('/companydata') }
                // else alert('Login Failed!')
            })
        }
    })
    }
    return (
        <Container component="main" maxWidth="xs">
            {/* <h1>{a}</h1> */}
            {/* <Company /> */}
            <AdminPanel />
            <hr />
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />8
                </Avatar>
                <Typography component="h1" variant="h5">
                    SignIn
        </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleOnChangePassword}
                        autoComplete="current-password"
                        required
                    />
                    {/* <FormGroup row>
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
                    </FormGroup> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Sign In
                    </Button>
                    <Grid container>

                        <Grid item>
                            <Link to="/signup">Don't have an account?</Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </Container>
    );
}


