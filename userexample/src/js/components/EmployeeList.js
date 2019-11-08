import React, {Component} from 'react';
import { PropTypes } from "prop-types";

class EmployeeList extends Component{
    componentDidMount(){
        this.props.dispatchGetData();
    }
    render(){
        return (
            <table className="table">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                </tr>
                {this.props.employees.map(x=>(
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.employee_name}</td>
                        <td>{x.employee_age}</td>
                        <td>{x.employee_salary}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

EmployeeList.propTypes = {
    employees: PropTypes.object.isRequired,
    dispatchGetData: PropTypes.func.isRequired,
};

export default EmployeeList;