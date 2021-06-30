import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE: //store ids
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        case ActionTypes.DELETE_FAVORITE: //we've never deltetd before, how to create new state. HOW??
            return state.filter(favorite => favorite !== action.payload); //more than 1 way. filter method to create a new array from favorite. still confused
        

        default:
            return state;
    }
};