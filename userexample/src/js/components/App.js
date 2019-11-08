import React from 'react';
import List from './List';
import Form from './Form';
import EmployeeList from '../containers/EmployeeList';

const App = () => (
    <div className="container">
    <div>
        <h2> New Employees</h2>
        <List/>

    </div>
    <div >
        <h2>Add a new employee</h2>
        <Form/>
    </div>
    <div>
        <h2>Employee List From API</h2>
        <EmployeeList/>
    </div>
    </div>
)

export default App;