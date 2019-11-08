import EmployeeList from '../components/EmployeeList';
import {connect} from 'react-redux';
import { Creator } from "../actions";

const mapStateToProps = state => ({
        employees: state.employeeList.apiEmployees.slice(0,50),
});

const mapDispatchToProps = dispatch => ({
        dispatchGetData: () => dispatch(Creator.EmployeeList.getData()),
});

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(EmployeeList);