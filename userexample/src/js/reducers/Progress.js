import {ActionType} from '../actions';

const initialState = {
    message: "",
    visibleCount: 0,
};

const progress = (state=initialState, action = {}) => {
    switch(action.type){
        case ActionType.Progress.Show: {
            return { message: action.message, visibleCount: state.visibleCount + 1};
        }
        case ActionType.Progress.Hide: {
            return {message: state.visibleCount > 1 ? state.message : "", visibleCount: state.visibleCount - 1};
        }
        default:
            return state;
    }
};

export default progress;