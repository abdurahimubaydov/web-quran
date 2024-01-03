import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailInfoError, getDetailInfoStart, getDetailInfoSuccess, getSurahInfoError, getSurahInfoStart, getSurahInfoSuccess } from '../../slicers/chapter-detail'
import SurahDetailService from '../../services/chapter-detail'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './style.css'
import Loading from '../../components/loading/loading'
import makkahh from '../../images/makkah.webp'
import madinahhh from '../../images/madinah.avif'
import loadinggg from '../../images/loading-image.gif'

export default function ChapterInfo() {
    const dispatch = useDispatch()
    const params = useParams()
    const { detailInfo, isLoading, surahInfo } = useSelector(state => state.chapter_detail)

    const getSurahDetail = async () => {
        dispatch(getDetailInfoStart())
        try {
            const response = await SurahDetailService.getChapterDetail(params.id)
            dispatch(getDetailInfoSuccess(response.chapter))
        } catch (error) {
            dispatch(getDetailInfoError())
        }
    }

    const getSurahInfo = async () => {
        dispatch(getSurahInfoStart())
        try {
            const response = await SurahDetailService.getChapterInfo(params.id)
            console.log(response)
            dispatch(getSurahInfoSuccess(response.chapter_info))
        } catch (error) {
            dispatch(getSurahInfoError())
        }
    }

    useEffect(() => {
        getSurahDetail()
        getSurahInfo()
    }, [])


    console.log(detailInfo)


    return detailInfo && surahInfo && (
        <div className='surah-info'>
            <div className="surah-info-card">
                <div className="left" style={{ width: makkahh }}>
                    <Link to={`/${detailInfo.id}`}>
                        <button> <AiOutlineArrowLeft style={{ marginRight: '10px' }} /> Go to Surah</button>
                    </Link>
                    {isLoading ? (
                        <video src={loadinggg}></video>
                    ) : (
                        <img
                        src={detailInfo.revelation_place === 'makkah' ? makkahh : madinahhh}
                        alt="connect"
                    />
                    ) }
                </div>
                <div className="right">
                    <div className="chapter-information">
                        <h1>Surah {detailInfo.name_simple}</h1>
                        <div className='in-mobile'>
                            <span>
                                Ayahs <br />
                                <label>
                                    {detailInfo.verses_count}
                                </label>
                            </span>
                            <span>
                                Revelation Place <br />
                                <label>
                                    {detailInfo.revelation_place}
                                </label>
                            </span>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: surahInfo.text }} />
                </div>
            </div>
        </div>
    )
}
