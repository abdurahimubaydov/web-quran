import React from 'react'
import { BsFillPlayFill, BsBook } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import './style.css'


export default function ChapterDetail(props) {

  const {hizb_number, juz_number, manzil_number, page_number, rub_el_hizb_number, ruku_number, sajdah_number, verse_key, verse_number, words, text_uthmani} = props

  const arabic_numbers = '۰۱۲۳۴۵۶۷۸۹'

  const convertToArabic = (numb) => {
    let res = "";
    const str = numb.toString();
    for (let c of str) {
      res += arabic_numbers.charAt(c);
    }
    return res;
  }

  return (
    <div className='chapter-in-detail-card'>
      <div className="chapter-detail-card-buttons">
        <div className='chapter-detail-card-buttons-left'>
          <span className="number-of-ayah">{verse_key}</span>
          <span>
            <BsFillPlayFill size={20} style={{ color: '#464B4F' }} color='#464B4F' />
          </span>
          <span>
            <BsBook size={15} color='#464B4F' />
          </span>
          <span>
            <FaComment size={15} color='#464B4F' />
          </span>
        </div>
        <div className='chapter-detail-card-buttons-right'>
          <span>
            <BiDotsHorizontalRounded size={17} color='#464B4F' />
          </span>
        </div>
      </div>
      <div className="chapter-detail-elements">
        <div className="text-arabic">
        {text_uthmani}
        </div>
        <div className="text-english">
        {words.map(item => (
            <span>{item.translation.text}</span>
          ))} 
        </div>
      </div>
    </div>
  )
}
