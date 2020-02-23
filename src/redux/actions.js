
export const ADD_USER_INFO = 'ADD_USER_INFO';

export const addUserInfo = info => {
    return {
        type: ADD_USER_INFO,
        userInfo: info
    };
};
