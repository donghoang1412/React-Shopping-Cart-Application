import * as ActionTypes from "../ActionTypes";
 let initial_state = {
  hobby : {
      name : "default name",
      _id: ""
  }
}
let HobbyReducer = (previousState = initial_state, action) => {
        
  if(action.type == ActionTypes.AddHobbyToStore) {
    return {...previousState, hobby:action.payload.hobby};
  }
  return previousState;
}
export default HobbyReducer;