//connect allows us to decide which data we can use from store as props in our component
import {connect} from "react-redux";
import UserComponent from "../../Components/User/UserComponent";
import {addUserToStore, siginUpuser} from "../../../State/User/UserActions";



//mapStateToProps : to make your component able to read data from store (subscriber)
let mapStateToProps = (state) =>{ //this state is the store
    return {
        user : state.userReducer.user
    }
}


//mapDispatchToProps : to make your component able to push data to the store using action (publisher)
let mapDispatchToProps = (dispatch) => {
    return {
        loginUser : (user) => {
            dispatch(siginUpuser(user))
        },
        addUser : (user) => {
            dispatch(addUserToStore(user))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
