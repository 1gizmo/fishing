import React from 'react'
import './scss/NsMain.scss'
import wt from './img/wt.png'

import NsItem from './NsItem'
import NsBanner from './NsBanner'
import { Route, Routes } from 'react-router-dom'
import RvTemplate from './reservation/RvTemplate'
import NsFishingSpot from './NsFishingSpot'
import NsClass from './NsClass'
import RvBtDetail from './reservation/RvBtDetail'




const NsMain = () => {



  return (
    <section>
        <Routes>
            <Route path='/bt' element={<RvTemplate/>} ></Route>
            <Route path='/' element ={<MainContent />} />
            <Route path='/detail' element={<RvBtDetail/>}></Route>
        </Routes>
        {/* <div className='banner'><img src={banner} /></div> */}
        {/* <NsBanner />

       <div className='mainbox'>

        <div className='contentbox'>
            <NsItem />
            <NsItem />
            <NsItem /> */}
            {/* <div className='ship'>
                <div className='title'>
                    <p className='t1'>오늘의 배낚시 > </p>
                    <p className='t2'>더보기</p>
                </div>
                <div className='shipboxs'>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                </div>
            </div> */}

           

        {/* </div>
        <div className='apibox'>
            <div className='exbox'>이번주 날씨 > </div>
        </div>
       </div> */}
    </section>
  )
}
const MainContent = ({ isRouteActive }) => {
    return (
        <>
           {!isRouteActive && (
            <>
                   <NsBanner />

            <div className='mainbox'>
            <div className='contentbox'>
            <NsItem />
            <NsFishingSpot />
            <NsClass />


            </div>
        <div className='apibox'>
            <div className='exbox'>이번주 날씨 > </div>
            <div className='wtbox'>
                <img src={wt} />
            </div>
        </div>
       </div>
            </>

           )}    
        </>
    )
}

export default NsMain