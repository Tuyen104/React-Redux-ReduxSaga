import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Creator} from '../actions';

class UserList extends Component{
    componentDidMount(){
        this.props.dispatchGetData();
    }
    render(){
        return (
            <ul>
                {this.props.employees.map(x => (
                    <li key={x.id}>{x.employee_name} : {x.employee_age} years old</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        employees: state.employeeList.apiEmployees.slice(0,20),
    };
}

function mapDispatchToProps (dispatch){
    return{
        dispatchGetData: () => dispatch(Creator.EmployeeList.getData())
    };
}

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(UserList)