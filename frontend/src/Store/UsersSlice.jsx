
import { createSlice } from '@reduxjs/toolkit'

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        users: null,
        status: false,
        msg: null
    },
    reducers: {

        //Set the data of user
        setUser(state, action) {
            state.users = action.payload
        },

        //Status of api call
        setStatus(state, action) {
            state.status = action.payload
        },

        //Get the message from api call
        setMsg(state, action) {
            state.msg = action.payload;
        }

    }
});

export const { setUser, setMsg, setStatus } = UsersSlice.actions;
export default UsersSlice.reducer;

//------------------ Function to register the user call the api-----------
export const registerUsers = (usersData) => async (dispatch, getState) => {

    // dispatch(setStatus(STATUS.LOADING))

    try {

        const res = await fetch(`${process.env.REACT_APP_API}api/v1/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usersData)
        });
        const data = await res.json();

        // console.log('check actuall data is ', data);

        dispatch(setStatus(data.sucess))
        dispatch(setUser(data.users));
        dispatch(setMsg(data.msg));

    } catch (error) {
        dispatch(setStatus(false))
        dispatch(setMsg(error.message));
    }
}
//------------------ Function to register the user call the api-----------
export const loginUsers = (usersData) => async (dispatch, getState) => {

    // dispatch(setStatus(STATUS.LOADING))

    try {

        const res = await fetch(`${process.env.REACT_APP_API}api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usersData)
        });
        const data = await res.json();

        console.log('check actuall data is ', data);

        dispatch(setStatus(data.sucess))
        dispatch(setUser(data.users));
        dispatch(setMsg(data.msg));

    } catch (error) {
        dispatch(setStatus(false))
        dispatch(setMsg(error.message));
    }
}