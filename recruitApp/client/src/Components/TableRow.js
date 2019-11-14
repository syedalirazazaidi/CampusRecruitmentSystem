import React, { Component } from 'react';
import axios from 'axios'
// const API = "http://localhost:5000/comp/comp_profile"
class TableRow extends Component {
    constructor(props){
        super(props)
    }
    async  delete(id) {
        console.log("id here", id)
        await axios.delete(`http://localhost:5000/comp/comp_profile/delete/${id}`)
            .then((res) => {
                console.log('the job detail has been deleted:', res.data);
                this.props.dataFunc()
            })
            .catch(err => console.log('you have a error:', err))
    }
    render() { 
        return (
            <tr>
                <td>
                    {this.props.obj.comp_name}
                </td>
                <td>
                    {this.props.obj.comp_name1}
                </td>
                <td>
                    {this.props.obj.comp_name2}
                </td>
                <td>
                    <button onClick={this.delete.bind(this, this.props.obj._id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;