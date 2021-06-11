import React from "react"
import PopupNotificationView from "./popup-notification.view"
import { useSelector } from "react-redux"

export default function PopupNotificationContainer(props) {
    const {
        open,
        
    } = props

    const username = useSelector((state) => state.userReducer.user.userName)

    React.useEffect(() => {
        getNotification()
    }, [])



    const [state, setState] = React.useState([])
    const getNotification = async () => {
        const api = `http://localhost:9090/user/api/getNotification?userName=${username}`
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)

        // console.log("My notification number", response.length)
        // setNotificationNumber(response.length)
        console.log("my response", response)
        setState(response)
    }
    console.log("my state", state)
    return (open) ? (
        <PopupNotificationView
            open={open}
            state={state}
            
        />
    ) : ""
}