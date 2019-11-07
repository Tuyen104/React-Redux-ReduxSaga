import { ActionType, Creator } from "../actions";
import {getEmployees} from '../apis';
import { takeEvery } from "redux-saga/effects";
import {call, put } from 'redux-saga/effects';

export function* fetchEmployeeListTask(){
    const payload = yield call(getEmployees);
        yield put({type: ActionType.EmployeeList.DataLoaded, payload});
    
}

const employeeListEffects = [
    takeEvery(ActionType.EmployeeList.DataRequest, fetchEmployeeListTask),
];

export default employeeListEffects;