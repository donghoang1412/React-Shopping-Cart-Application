import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./notification.css"
import PopupNotificationContainer from "./popup-notification/popup-notification.container"
import { Button, } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function NotificationView(props) {
    const {
        notificationCount,
        open,
        removeNotification,
        handleClickAway
        } = props

    return (
        <ClickAwayListener onClickAway ={handleClickAway}>
            <div className="NotificationView__root" >
                <Button variant="outlined" className="NotificationView__button" onClick={removeNotification}>
                    <FontAwesomeIcon size="2x" icon={faBell} className='bell-icon' />
                    <span className="NotificationView__span">{notificationCount}</span>
                </Button>
                <PopupNotificationContainer
                    open={open}
                    handleOnClosePopupNotification
                />
            </div>
        </ClickAwayListener>
    )
}


