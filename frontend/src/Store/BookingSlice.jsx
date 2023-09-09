
import { createSlice } from '@reduxjs/toolkit'

const BookingSlice = createSlice({
    name: 'booking',
    initialState: [],
    reducers: {

        //Set the data of user
        setBooking(state, action) {
            state.push(action.payload);
        },

        //Fetch all the bookings
        fetchBooking(state,action){
            state = action.payload;
        },

        //Remove User
        removeBooking(state,action){
            return state.filter(item => item._id !== action.payload)
        },

        //Set the request of booking success
        setBookingRequestSuccess(state,action){
            state.map(item => item._id === action.payload ? ({...item,status:'success'}) : (item));
        },

        //Set the request of booking cancel
        setBookingRequestReject(state,action){
            state.map(item => item._id === action.payload ? ({...item,status:'cancel'}) : (item));
        }
    }
});

export const { setBooking,removeBooking, setBookingRequestReject,setBookingRequestSuccess,fetchBooking } = BookingSlice.actions;
export default BookingSlice.reducer;
