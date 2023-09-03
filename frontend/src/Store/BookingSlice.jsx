
import { createSlice } from '@reduxjs/toolkit'

const BookingSlice = createSlice({
    name: 'booking',
    initialState: [],
    reducers: {

        //Set the data of user
        setBooking(state, action) {
            state.push(action.payload);
        },

        //Remove User
        removeBooking(state,action){
            return state.filter(item => item._id !== action.payload)
        }
    }
});

export const { setBooking,removeBooking} = BookingSlice.actions;
export default BookingSlice.reducer;
