import * as employeeList from './employeeList';
import * as progress from './progress';

export const ActionType = {
    EmployeeList: employeeList.Type,
    Progress: progress.Type,
};

export const Creator = {
    EmployeeList: employeeList.Creator,
    Progress: progress.Creator,
};