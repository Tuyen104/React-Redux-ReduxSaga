import employeeListEffects from './employeeListEffects';
import {all} from 'redux-saga/effects';

function* rootSaga(){
    yield all([
        ...employeeListEffects,
    ]);
}

export default rootSaga;