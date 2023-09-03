
import { createSlice } from '@reduxjs/toolkit'

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        user : null
    },
    reducers: {

        //Set the data of user
        setUser(state, action) {
            state.user = action.payload;
        },

        //Remove User
        removeUser(state){
            state.user = null;
        }
    }
});

export const { setUser } = UsersSlice.actions;
export default UsersSlice.reducer;
