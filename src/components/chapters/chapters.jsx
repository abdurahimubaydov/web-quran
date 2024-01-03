import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import Chapter from '../chapter/chapter'
import Loading from '../loading/loading'

export default function Chapters() {
  const { chapters } = useSelector(state => state.chapter)
  return (
    <div className='chapters-section'>
      {chapters.length ? chapters.map(item => (
        <Chapter {...item} key={item.id} />
      )) : (
        <div style={{width: '100%',height: '100vh'}}>
            <Loading/>
        </div>
    )}
    </div>
  )
}