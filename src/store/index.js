import { configureStore } from "@reduxjs/toolkit"
import chapterSlice from '../slicers/chapter'
import chapterDetailSlice from '../slicers/chapter-detail'
import audioSlice from "../slicers/audio"


export default configureStore({
    reducer: {
        chapter: chapterSlice,
        chapter_detail: chapterDetailSlice,
        audio: audioSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})