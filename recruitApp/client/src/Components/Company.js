import { Link } from "react-router-dom"

import React, { Component } from 'react'
class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Link
                    to="/post"
                    // component="button"
                    // variant="body2"
                    onClick={() => {
                        alert("I'm a button.");
                    }}
                > 
                    <b> POST A JOB</b>
                </Link>
            </div>

        )
    }
}

export default Company;
