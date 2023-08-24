import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./UsersSlice";


const Store = configureStore({
    reducer : {
        users : UsersSlice
    }
})

export default Store;