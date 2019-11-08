import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Creator} from '../actions';

class ConnectedForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee_name: "",
            employee_age: ""
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const {employee_name, employee_age} = this.state;
        this.props.addEmployee({employee_name, employee_age});
        this.setState({employee_name: "", employee_age: ""});
    }
    render(){
        const {employee_name, employee_age} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="employee_name" value={employee_name} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" id="employee_age" value={employee_age} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-info">Save</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        addEmployee: emp => dispatch(Creator.EmployeeList.addEmployee(emp))
    };
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;