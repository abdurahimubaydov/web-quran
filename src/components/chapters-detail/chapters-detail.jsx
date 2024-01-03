import React from 'react'
import ChapterDetail from '../chapter-detail/chapter-detail'
import './style.css'
import { useSelector } from 'react-redux'

export default function ChaptersDetail() {
  const {surah} = useSelector(state => state.chapter_detail)

  return (
    <div className='chapters-in-detail-page'>
      {surah.map(item => (
        <ChapterDetail key={item.id} {...item} />
      ))}
    </div>
  )
}
