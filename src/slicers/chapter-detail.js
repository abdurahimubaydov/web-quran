import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    detailInfo: null,
    surah: [],
    surahInfo: null,
    isLoading: false,
    error: null
}


const chapterDetailSlice = createSlice({
    name: 'chapter-detail',
    initialState,
    reducers: {
        getDetailInfoStart: state => {
            state.isLoading = true
        },
        getDetailInfoSuccess: (state, action) => {
            state.isLoading = false
            state.detailInfo = action.payload
        },
        getDetailInfoError: state => {
            state.isLoading = false
            state.error = 'Error'
        },
        getSurahInfoStart: state => {
            state.isLoading = true
        },
        getSurahInfoSuccess: (state, action) => {
            state.isLoading = false
            state.surahInfo = action.payload
        },
        getSurahInfoError: state => {
            state.isLoading = false
            state.error = 'Error'
        },
        getOwnSurahStart: state => {
            state.isLoading = true
        },
        getOwnSurahSuccess: (state, action) => {
            state.isLoading = false
            state.surah = action.payload
        },
        getOwnSurahError: state => {
            state.isLoading = false
        }
    }
})


export const {
        getDetailInfoStart, 
        getDetailInfoSuccess, 
        getDetailInfoError, 
        getSurahInfoStart, 
        getSurahInfoSuccess, 
        getSurahInfoError, 
        getOwnSurahStart, 
        getOwnSurahSuccess, 
        getOwnSurahError
    } = chapterDetailSlice.actions
export default chapterDetailSlice.reducer