import React from 'react'
import './scss/NsFishingSpot.scss'
import ex1 from './img/bg.jpg'
const NsClass = () => {
  return (
    <div className='class'>
    <div className='title'>
        <p className='t1'>오늘의 낚시터 > </p>
        <p className='t2'>더보기</p>
    </div>
    <div className='classs'>
        <div><img src={ex1} /></div>
        <div><img src={ex1} /></div>
        <div><img src={ex1} /></div>
    </div>
</div>
  )
}

export default NsClass