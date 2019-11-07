import {ActionType} from '../actions';

const initialState = {
    employees: [],
    apiEmployees: [],
};

function employeeList (state = initialState, action){
    if(action.type === ActionType.EmployeeList.AddEmployee){
        return Object.assign({}, state, {
            employees: state.employees.concat(action.payload)
        });
    }
    if(action.type === ActionType.EmployeeList.DataLoaded){
        return Object.assign({}, state, {
            apiEmployees: state.apiEmployees.concat(action.payload)
        });
    }


    return state;
};

export default employeeList;