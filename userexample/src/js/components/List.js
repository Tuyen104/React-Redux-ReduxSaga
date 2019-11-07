import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {employees: state.employeeList.employees};
};

const ConnectedList = ({employees}) => (
    <ul>
        {employees.map(el => (
            <li key={el.id}>{el.employee_name} : {el.employee_age} years old</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;