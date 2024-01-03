import React, { useEffect } from 'react'
import { Link, useFetcher, useParams } from 'react-router-dom'
import SurahDetailService from '../../services/chapter-detail'
import { getDetailInfoError, getDetailInfoStart, getDetailInfoSuccess, getOwnSurahSuccess } from '../../slicers/chapter-detail'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import Loading from '../../components/loading/loading'
import BismillahSvg from '../../components/bismillah-svg/bismillah-svg'
import { AiFillInfoCircle, AiFillPlayCircle } from 'react-icons/ai'
import ChaptersDetail from '../../components/chapters-detail/chapters-detail'
import axios from 'axios'
import AudioSerVice from '../../services/audio'
import { getAudioError, getAudioStart, getAudioSuccess } from '../../slicers/audio'

export default function ChapterDetail() {
    const params = useParams()
    const dispatch = useDispatch()
    const { detailInfo, isLoading, surah } = useSelector(state => state.chapter_detail)
    const verses_count = detailInfo ? detailInfo.verses_count : ''
    const { audio } = useSelector(state => state.audio)


    const getSurahDetail = async () => {
        dispatch(getDetailInfoStart())
        try {
            const response = await SurahDetailService.getChapterDetail(params.id)
            dispatch(getDetailInfoSuccess(response.chapter))
        } catch (error) {
            dispatch(getDetailInfoError())
        }
    }

    const getSingleAudio = async () => {
        dispatch(getAudioStart())
        try {
            const response = await AudioSerVice.getSingChapter(params.id)
            dispatch(getAudioSuccess(response.audio_file))
        } catch (error) {
            dispatch(getAudioError())
        }
    }

    const getOwnSurah = async () => {
        await axios
            .get(`https://api.quran.com/api/v4/verses/by_chapter/${params.id}?&fields=text_uthmani&text_type=wordslanguage=eng&words=true&page=1&per_page=286&`)
            .then(res => dispatch(getOwnSurahSuccess(res.data.verses)))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getSurahDetail()
        getOwnSurah()
    }, [params.id])


    return detailInfo && (
        <div className='surah-detail'>
            <h1>{detailInfo.name_arabic}</h1>
            {detailInfo.bismillah_pre && <BismillahSvg/> }
            <div className="translation-surah-info">
                <div className="translation">
                    <label>Translation by</label>
                    <span>Dr. Mustafa Khattab, the Clear Quran
                    </span>
                </div>
                <div className="surahhh-info">
                    <Link to={`/surah/${detailInfo.id}/info`}>
                        <label>
                            <AiFillInfoCircle size={17} className='icon-info' /> Surah info
                        </label>
                    </Link>
                    <span onClick={getSingleAudio}> 
                        <AiFillPlayCircle size={17} color='#2BA4AA' className='audio-icon' /> Play Audio
                    </span>
                </div>
            </div>
            <ChaptersDetail/>
        </div>
    )
}