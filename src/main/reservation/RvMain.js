import React from 'react'
import './RvScss/RvMain.scss'
import boat from '../img/boat.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bullseye,Calendar2Check,EmojiSmile,PersonVcard, CheckCircleFill } from 'react-bootstrap-icons';
import RvinnerHeader from './RvinnerHeader';


import map from '../img/map.png'
import RvItem from './RvItem';
import { Route, Routes } from 'react-router-dom';
import RvBtDetail from './RvBtDetail';



function RvMain() {
  return (
    <div>
    {/* <Routes>
            <Route path='/detail' element={<RvBtDetail/>}></Route>
     </Routes> */}

        <div className='rvMain'>

            <div className='rvContent'>
                <RvinnerHeader />
                <div className='x1'>
                    <div>검색결과 1-30 / 총 80개</div>
                    <div>기본정렬순</div>
                </div>
                     <div className='cardBox'>

            <RvItem />
            <RvItem />
            <RvItem />
       
         
        
                    </div>
            </div>



            <div className='rvApibox'>
            <div>위치 확인하기</div>
            <div className='mapbox'>

            <img src={map} />
            </div>
            </div>
        </div>

    </div>

  )
}

export default RvMain