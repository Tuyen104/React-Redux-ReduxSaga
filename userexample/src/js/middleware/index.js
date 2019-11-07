import {ActionType} from '../actions';

const forbiddenWords = ["spam", "money"];

function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function (action){
            if(action.type === ActionType.EmployeeList.AddEmployee){
                const foundWord = forbiddenWords.filter(word => action.payload.employee_name.includes(word));
                if (foundWord.length){
                    return dispatch({type: "FOUND_BAD_WORD"});
                }
            }
            return next(action);
        }
    }
}
export default forbiddenWordsMiddleware;