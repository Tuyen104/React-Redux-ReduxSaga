import store from './store/index';
import {addEmployee} from './actions';

window.store = store;
window.addEmployee = addEmployee;