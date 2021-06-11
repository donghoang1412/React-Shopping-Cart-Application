// reducers are used to generate new state on the basis of action raised
// no surprises just simple calculation

import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = {
    user: {
        userName: "Name",
        password: "",
        street: "Address",
        mobile: "",
        _id: ""
    },
    signInSuccess: false,
}

let UserReducer = (previousState = INITIAL_STATE, action) => {

    switch (action.type) {
        case ActionTypes.AddUserToStore:
            console.log("Adduser To Store Reducer", action)
            //we will create a new state using payload passed from user component and container
            //for every action dispatch reducer generates a new state
            //let newState = Object.assign(previousState);
            //newState.user = action.payload.user;
            console.log({ ...previousState, user: action.payload.user })
            return { ...previousState, user: action.payload.user }; //returns a new state
        // return [...previousState, action.payload.user];
        case ActionTypes.USER_SET_LOGIN_AS_SUCCESS:
            return { ...previousState, signInSuccess: action.payload.signInSuccess };
        case ActionTypes.USER_SET_LOGOUT_AS_SUCCESS:
            return { ...previousState, signInSuccess: action.payload.signInSuccess };
        default:
            return previousState;
    }
}

export default UserReducer;