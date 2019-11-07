import employeeList from './EmployeeList';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    employeeList: employeeList,
});

export default rootReducer;