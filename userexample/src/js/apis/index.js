import {invoke} from './invoke';

export const getEmployees = async () => {
    return await invoke ({
        method: "GET",
        path: `/employees`,
    });
};