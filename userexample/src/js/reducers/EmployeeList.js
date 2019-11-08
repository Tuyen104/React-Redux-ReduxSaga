import {ActionType} from '../actions';

const initialState = {
    employees: [],
    apiEmployees: [],
};

function employeeList (state = initialState, action){
    switch(action.type) {
        case ActionType.EmployeeList.AddEmployee: {
            return Object.assign({}, state, {
                employees: state.employees.concat(action.payload)
            });
        }
        case ActionType.EmployeeList.DataLoaded: {
            return Object.assign({}, state, {
                apiEmployees: state.apiEmployees.concat(action.payload)
            });
        }
        default: 
            return state;
    }
};

export default employeeList;