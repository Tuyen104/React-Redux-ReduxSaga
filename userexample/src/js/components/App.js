import React from 'react';
import List from './List';
import Form from './Form';
import Post from './Post';

const App = () => (
    <>
    <div>
        <h2> New Employees</h2>
        <List/>

    </div>
    <div>
        <h2>Add a new employee</h2>
        <Form/>
    </div>
    <div>
        <h2>Employee List From API</h2>
        <Post/>
    </div>
    </>
)

export default App;