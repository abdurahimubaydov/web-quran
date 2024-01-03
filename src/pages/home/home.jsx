import React, { useEffect } from 'react'
import SearchSection from '../../components/search-section/search-section'
import Chapters from '../../components/chapters/chapters'
import { useDispatch, useSelector } from 'react-redux'
import ChapterService from '../../services/chapter'
import { getChapterError, getChapterStart, getChapterSuccess } from '../../slicers/chapter'

export default function Home() {
  const dispatch = useDispatch()
  const { chapters, isLoading } = useSelector(state => state.chapter)

  const getChapters = async () => {
    dispatch(getChapterStart())
    try {
      const response = await ChapterService.getChapterSuccess()
      dispatch(getChapterSuccess(response.chapters))
    } catch (error) {
      dispatch(getChapterError())
    }
  }

  useEffect(() => {
    getChapters()
  }, [])

  return (
    <React.StrictMode>
      <SearchSection/>
      <Chapters/>
    </React.StrictMode>
  )
}