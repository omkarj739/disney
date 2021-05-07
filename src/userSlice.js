import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    email: "",
    photo: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo
        },
        signoutUser: (state) => {
            state.user = null;
            state.email = null;
            state.photo = null
        }
    }
});

export const { signInUser, signoutUser } = userSlice.actions;

export const loginUser = state => state.user.name;
export const loginEmail = state => state.user.email;
export const loginPhoto = state => state.user.photo;


export default userSlice.reducer;