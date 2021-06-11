import {connect} from "react-redux";
import HobbyComponent from "../../Components/Hobby/HobbyComponent";
import {addHobbyToStore, saveHobby} from "../../../State/Hobby/HobbyActions";
 let mapStateToProps = (state) =>{ 
    return {
        hobby : state.hobbyReducer.hobby
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addHobby : (hobby) => {
            dispatch(addHobbyToStore(hobby))
        },
        saveHobby : (hobby) => {
            dispatch(saveHobby(hobby))
        }
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(HobbyComponent);