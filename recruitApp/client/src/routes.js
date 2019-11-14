import React, { Component } from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom';
import history from './History'
import SignUp from './Components/signup/SignUp';
import SignIn from './Components/signIn/SignIn';
import AdminPanel from "./Components/AdminPanel"
import _POST from "./Components/Company"
import CompanyData from './companyData';
import Student from './Components/student';
import CompanyAllData from './Components/companyData3'
import StudentHeaders from './Components/studentHeader';
export class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Router history={history}>
                        <Route exact path="/" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path = "/post" component = {_POST}/>
                        <Route path = "/admin" component = {AdminPanel}/>
                        <Route path = "/companydata" component = {CompanyData}/>
                        <Route path = "/student" component = {Student}/>
                        <Route path = "/companyalldata" component = {CompanyAllData}/>
                        <Route path = "/studentheader" component = {StudentHeaders}/>
                    </Router>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes
