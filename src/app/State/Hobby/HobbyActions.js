import * as ActionTypes from "../ActionTypes";
export const addHobbyToStore = (hobby) => ({        
  type: ActionTypes.AddHobbyToStore,
  payload: {hobby}
})
 export const saveHobby = (hobby) => {
  return function(dispatch, getState) {
      window.fetch("http://localhost:9090/student/api/saveHobby",
          {
              method: 'POST', 
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(hobby)
          })
      .then (response => response.json()) 
      .then (response => {
         let action = addHobbyToStore(response);
          dispatch(action); 
      })
      .catch ((err)=>{
          console.log("Error: ", err)
      })
  }
}