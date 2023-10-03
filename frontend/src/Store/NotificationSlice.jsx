
import { createSlice } from '@reduxjs/toolkit'

const NotificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        notifications: null
    },
    reducers: {

        //Set the data of user
        setNotifications(state, action) {
            state.notifications = action.payload;
        },

        //Remove User
        removeNotification(state,action){
            return state.notifications?.filter(item => item._id !== action.payload);
        },

        //Update notifications true
        readAll(state){
            return state.notifications.map((item) => item.read === false ? {...item,read:true} : (item));
        }
    }
});

export const { setNotifications,removeNotification,readAll } = NotificationSlice.actions;
export default NotificationSlice.reducer;
