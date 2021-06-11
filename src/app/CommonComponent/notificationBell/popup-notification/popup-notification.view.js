import React from "react"
import Dialog, { Button } from '@material-ui/core'
import './popup-notification.css'
export default function PopupNotificationView(props) {
    const {
        open,
        state,
        
    } = props

    let timeNow = new Date().getTime()
    console.log("My state at popup view", state)
    const updateNoti = async (_id) => {
        let notiObj = {
            _id: _id,
            click: 0
        }

        const api = "http://localhost:9090/user/api/updateNotification"
        const response = await fetch(api, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notiObj)
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        console.log("my response", response)
    }
    return (
        <div className="PopupNotificationView__root">
            {state.map((notification) => {
                return (
                    <div className="PopupNotificationView__inner">
                        
                        <p className="PopupNotificationView__p" onClick={() => updateNoti(notification._id)}>
                            You have {notification.type} {Math.round((timeNow - notification.time) / (1000 * 3600))} hours ago!</p>
                   
                    </div>
                )
            })}

        </div>


    )
}