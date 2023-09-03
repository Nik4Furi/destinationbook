import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./UsersSlice";
import PlacesSlice from "./PlacesSlice";
import BookingSlice from "./BookingSlice";
import NotificationSlice from "./NotificationSlice";


const Store = configureStore({
    reducer : {
        users : UsersSlice,
        places: PlacesSlice,
        booking: BookingSlice,
        notification:NotificationSlice
    }
})

export default Store;