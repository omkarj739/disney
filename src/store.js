import { configureStore } from '@reduxjs/toolkit'
import useReducer from "./userSlice";
import movieReducer from "./movieSlice"

export default configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer
    },
});