import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Chapter(props) {
    const {
        id, name_arabic, name_simple, translated_name, verses_count
    } = props
    
  return (
    <Link to={`/${id}`} className='chapter-card'>
        <div style={{display: 'flex'}}>
            <div className="chapter-box"> 
                <span>{id}</span>
            </div>
            <div className="chapter-name-and-translate">
                <span className="chapter-name">{name_simple}</span>
                <span className="chapter-translate">{translated_name.name}</span>
            </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <span className="name-arabic">{name_arabic}</span>
            <span className="verses-count">{verses_count} ayahs</span>
        </div>
    </Link>
  )
}