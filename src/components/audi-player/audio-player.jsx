import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { getAudioError, getAudioStart, getAudioSuccess, clearAudio } from '../../slicers/audio';
import AudioSerVice from '../../services/audio';
import './style.css'
import { AiOutlineClose } from 'react-icons/ai'

export const AudioPlayerrr = () => {
    const { audio } = useSelector(state => state.audio)
    const dispatch = useDispatch()

    const getNextChapter = async () => {
        dispatch(getAudioStart())
        try {
            const response = await AudioSerVice.getNextSingleChapter(audio.chapter_id)
            dispatch(getAudioSuccess(response.audio_file))
        } catch (error) {
            dispatch(getAudioError())
        }
    }

    const getBeforeChapter = async () => {
        dispatch(getAudioStart())
        try {
            const response = await AudioSerVice.getBeforeSingleChapter(audio.chapter_id)
            dispatch(getAudioSuccess(response.audio_file))
        } catch (error) {
            dispatch(getAudioError())
        }
    }   

    return (
        <div className='auuudio-player'>
            <AiOutlineClose 
                className='closeee-icon'
                onClick={() => dispatch(clearAudio())}
            />
            <AudioPlayer
                autoPlay
                src={audio.audio_url}
                onPlay={e => console.log("onPlay")}
                showSkipControls={() => console.log('Next')}
                showJumpControls={false}
                onClickNext={getNextChapter}
                onClickPrevious={getBeforeChapter}
            />
        </div>
    )
}


