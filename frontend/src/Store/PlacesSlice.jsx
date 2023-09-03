
import { createSlice } from '@reduxjs/toolkit'

const PlacesSlice = createSlice({
    name: 'places',
    initialState: {
        places: [],
    },
    reducers: {

        //Set the data of user
        setPlaces(state, action) {
            state.places = action.payload;
        }

        // //Remove User
        // removeUser(state){
        //     state.user = null;
        // }
    }
});

export const { setPlaces } = PlacesSlice.actions;
export default PlacesSlice.reducer;
