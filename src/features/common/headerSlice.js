import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        pageTitle: "Home",  // current page title state management
        pageTheme:localStorage.getItem("theme"),
        noOfNotifications : 12,  // no of unread notifications
        newNotificationMessage : "",  // message of notification to be shown
        newNotificationStatus : 1,   // to check the notification type -  success/ error/ info
    },
    reducers: {
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload.title
        },

        setPageTheme:(state, action) =>{
            state.pageTheme = action.payload.theme
        },

        removeNotificationMessage: (state, action) => {
            state.newNotificationMessage = ""
        },

        showNotification: (state, action) => {
            state.newNotificationMessage = action.payload.message
            state.newNotificationStatus = action.payload.status
        },
    }
})

export const { setPageTitle, setPageTheme, removeNotificationMessage, showNotification } = headerSlice.actions

export default headerSlice.reducer