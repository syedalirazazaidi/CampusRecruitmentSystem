import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
import { object } from 'prop-types';
const API = "http://localhost:5000/comp/comp_profile"
class CompanyAllData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      data: [],
    }
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    axios.get(API)
      .then(response => {
        console.log(response.data)
        this.setState({ data: response.data, isLoading: false }, console.log(this.state.data));
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  delete(id) {
    console.log("id here", id)
    axios.delete(`http://localhost:5000/comp/comp_profile/delete/${id}`)
      .then((res) => {
        console.log('the job detail has been deleted:', res.data);
        this.getData()
      })
      .catch(err => console.log('you have a error:', err))
  }
  tabRow() {
    return this.state.data.map(function (object, i) {
      return <tr key={i}>
        <td>
          {object.comp_name}
        </td>
        <td>
          {object.comp_name1}
        </td>
        <td>
          {object.comp_name2}
        </td>
        <td>
          <button onClick={() => this.delete.bind(this, object._id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    });
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h3 align="center">Company Job List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Description</th>
              <th>Job Requirement</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((object, i) => {
                return <tr key={i}>
                  <td>
                    {object.comp_name}
                  </td>
                  <td>
                    {object.comp_name1}
                  </td>
                  <td>
                    {object.comp_name2}
                  </td>
                  <td>
                    <button onClick={() => this.delete(object._id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default CompanyAllData;

