import { createSlice } from "@reduxjs/toolkit";
import { removeItem, setItem } from "../helpers";

const initialState = {
    audio: null,
    isloading: false,
    error: null
}

const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        getAudioStart: state => {
            state.isloading = true
        },
        getAudioSuccess: (state, action) => {
            state.isloading = false
            state.audio = action.payload
            setItem('audio', action.payload.audio_url)
        },
        getAudioError: state => {
            state.isloading = false
            state.error = 'Error'
        },
        clearAudio: state => {
            state.audio = null
            removeItem('audio')
        }
    }
})


export const  {getAudioStart, getAudioSuccess, getAudioError, clearAudio} = audioSlice.actions
export default audioSlice.reducer


const api = 'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3'