import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        movies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending
        },
    },
});

export const { movies } = movieSlice.actions;

export const setRecommend = (state) => state.movie.recommend;
export const setnewDisney = (state) => state.movie.newDisney;
export const setOriginal = (state) => state.movie.original;
export const setTrending = (state) => state.movie.trending;

export default movieSlice.reducer;