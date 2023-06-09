import React from 'react'
import './RvScss/RvMain.scss'
import boat from '../img/boat.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bullseye,Calendar2Check,EmojiSmile,PersonVcard, CheckCircleFill } from 'react-bootstrap-icons';
import RvinnerHeader from './RvinnerHeader';


import map from '../img/map.png'
function RvMain() {
  return (

    <div>
        <div className='rvMain'>

            <div className='rvContent'>
                <RvinnerHeader />
                <div className='x1'>
                    <div>검색결과 1-30 / 총 80개</div>
                    <div>기본정렬순</div>
                </div>
                     <div className='cardBox'>
            <div className='contentCard'>
                <div className='imgbox'>
                    <img src={boat} />
                </div>
                <div className='cardTitle'>
                <CheckCircleFill />[제부도5시간] 카날리나 1호 쭈꾸미 낚시
                </div>
                <div className='miniTitle'>집결장소 제부도 주차장 1호</div>
                <div className='miniContent'>
                <Bullseye />차고지 : 제부도 주차장 &nbsp;
                <PersonVcard/>
                신분증 지참 &nbsp;
                <EmojiSmile />
                 총 6명
                </div>
                <div className='calendar'>
                <Calendar2Check style={{color:'#3974D9'}}/> 130,000원
                </div>
            </div>
        
            <div className='contentCard'>
                <div className='imgbox'>
                    <img src={boat} />
                </div>
                <div className='cardTitle'>
                <CheckCircleFill />[제부도5시간] 카날리나 1호 쭈꾸미 낚시
                </div>
                <div className='miniTitle'>집결장소 제부도 주차장 1호</div>
                <div className='miniContent'>
                <Bullseye />차고지 : 제부도 주차장 &nbsp;
                <PersonVcard/>
                신분증 지참 &nbsp;
                <EmojiSmile />
                 총 6명
                </div>
                <div className='calendar'>
                <Calendar2Check style={{color:'#3974D9'}}/> 130,000원
                </div>
            </div>
            
            <div className='contentCard'>
                <div className='imgbox'>
                    <img src={boat} />
                </div>
                <div className='cardTitle'>
                <CheckCircleFill />[제부도5시간] 카날리나 1호 쭈꾸미 낚시
                </div>
                <div className='miniTitle'>집결장소 제부도 주차장 1호</div>
                <div className='miniContent'>
                <Bullseye />차고지 : 제부도 주차장 &nbsp;
                <PersonVcard/>
                신분증 지참 &nbsp;
                <EmojiSmile />
                 총 6명
                </div>
                <div className='calendar'>
                <Calendar2Check style={{color:'#3974D9'}}/> 130,000원
                </div>
            </div>
        
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