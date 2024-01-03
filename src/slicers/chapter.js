import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chapters: [],
    isLoading: false,
    error: null
}

const chapterSlice = createSlice({
    name: 'chapter',
    initialState,
    reducers: {
        getChapterStart: state => {
            state.isLoading = true
        },
        getChapterSuccess: (state, action) => {
            state.isLoading = false
            state.chapters = action.payload
        },
        getChapterError: state => {
            state.isLoading = false
        }
    }
})


export const {getChapterStart, getChapterSuccess, getChapterError} = chapterSlice.actions
export default chapterSlice.reducer