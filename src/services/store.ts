import React from "react"
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-slice.ts";
import preloaderReducer from "./reducers/preloader-slice.ts";
import profileReducer from "./reducers/profile-slice.ts";
import modalReducer from "./reducers/modal-slice.ts";


export const store = configureStore({
    
    reducer: {
        users: usersReducer,
        isLoading: preloaderReducer,
        profile: profileReducer,
        modal: modalReducer
    }
})