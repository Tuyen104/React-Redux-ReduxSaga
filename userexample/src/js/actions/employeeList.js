export const Type = {
    AddEmployee: "EMPLOYEELIST_ADD_USER",
    DataRequest: "EMPLOYEELIST_DATA_REQUESTED",
    DataLoaded: "EMPLOYEELIST_DATA_LOADED",
};

export const Creator = {
    addEmployee(payload){
        return {
            type: Type.AddEmployee,
            payload,
        };
    },

    getData(){
        return {
            type: Type.DataRequest
        }
    },
};
