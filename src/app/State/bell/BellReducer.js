import * as ActionTypes from "../ActionTypes"

let INITIAL_STATE = {
    notificationCount : 0
}

export default function BellReducer (state=INITIAL_STATE , action) {
    switch (action.type){
        case ActionTypes.INCREASE_NOTIFICATION_COUNT:
            return {...state, notificationCount: state.notificationCount +1}

        case ActionTypes.SET_NOTIFICATION_COUNT:
            return{...state, notificationCount: action.payload.notificationCount}
        
        default :
            return state     
    } 
}