//this will contain all the actions that are going to be raised by action creators on user page
//action is an object that contains - type (action type) and payload (the data to be passed to store)
import * as ActionTypes from "../ActionTypes";

//action that would be dispatched to the store (eventually to reducer)
export const addUserToStore = (user) => ({        
    type: ActionTypes.AddUserToStore,
    payload: {user}
})


export const siginUpuser = (userObject) => {
    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch is from the server
        // thunk shall call
        console.log("called by thunk");
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/student/api/signinup",//uri or end point of singninup api
            {
                method: 'POST', //rest method type to save the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })//req.body.userName,req.body.password...
        .then (response => response.json()) //response from the server/ api
        .then (userresp => {
            console.log("response ", userresp); // this response will come with _id

            let action = addUserToStore(userresp);
            dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
            
            //dispatch(loading(false));
            //dispatch(getUserNCart(userresp._id));
        })
        .catch ((err)=>{
            console.log("Error While Login", err)
        })
    }
}

// export const signInUser = (userObject) =>{
//     // thunk, returns function as an action
//     return function(dispatch, getState) {
//         // here we go with ajax call : to save data to the server or fetch is from the server
//         // thunk shall call
//         console.log("called by thunk");
//         //dispatch(loading(true));

//         window.fetch("http://localhost:9090/user/api/signInUser",//uri or end point of singninup api
//             {
//                 method: 'GET' //rest method type to save the data
//             })//req.body.userName,req.body.password...
//         .then (response => response.json()) //response from the server/ api
//         .then (userresp => {
//             console.log("response ", userresp); // this response will come with _id

//             for(var i =0; i < userresp.length; i++){
//                 if(userObject.userName === userresp[i].userName){
//                     if(userObject.password === userresp[i].password){
//                         console.log(userresp[i])
//                         let action = addUserToStore(userresp[i]);
//                         dispatch(action);
//                         break;
//                     }
//                 }
//             }

//             // let action = addUserToStore(userresp);
//             // dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
            
//             //dispatch(loading(false));
//             //dispatch(getUserNCart(userresp._id));
//         })
//         .catch ((err)=>{
//             console.log("Error While Login", err)
//         });
//     }
// }


export const signInUser = (userObject) =>{
    
    // Pass userObject to the backend api.

    // localhost:9090/user/api/signInUser?userName=Dong&password=Hoang
    // GET

    /*

    When backend receive the values req.body.username....
    It will use the username and check if the database has the corresponding object.
    If no object is found, then response error.
    If there is an object, simply check the password and then response either succeeded or error.
    
    */

    /** 
    Back end api will response 2 things
    Success case: 
    response object = {
        "succeeded": true
    }

    Failure case:

    response object = {
        "error": true
    }

    */           
}

export const setLoginAsSuccess = () => ({
    type: ActionTypes.USER_SET_LOGIN_AS_SUCCESS,
    payload: {
        signInSuccess: true,
    }
})

export const setLogoutAsSuccess = () =>({
    type: ActionTypes.USER_SET_LOGOUT_AS_SUCCESS,
    payload: {
        signInSuccess: false,
    }
})
