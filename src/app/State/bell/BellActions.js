import * as ActionTypes from "../ActionTypes"

export const increaseNotificationCount = () =>({
    type : ActionTypes.INCREASE_NOTIFICATION_COUNT,
})

export const setNotificationCount =(notificationCount) =>({
    type : ActionTypes.SET_NOTIFICATION_COUNT,
    payload : {notificationCount}
})

export const removeNotificationCount = () =>({
    type : ActionTypes.REMOVE_NOTIFICATION_COUNT
})