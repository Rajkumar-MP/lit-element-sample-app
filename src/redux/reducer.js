
import { ADD_USER_INFO, } from './actions.js';

const INITIAL_STATE = {
    userInfo: {},
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_USER_INFO:
            return { ...state, userInfo: {...action.userInfo} };
        default: return state;
    }
};
