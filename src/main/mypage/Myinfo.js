import React from 'react'
import './MpScss/Myinfo.scss'
import DaumPostcode from 'react-daum-postcode';

const Myinfo = () => {
    const handleAddressSearch = () => {
        new window.daum.Postcode({
          onComplete: function(data) {
            // 주소 검색 완료 시 실행되는 콜백 함수
            console.log(data); // 선택된 주소 데이터를 확인하거나 필요한 처리를 수행합니다.
            // 주소 데이터를 원하는 방식으로 처리하고 상태에 저장할 수 있습니다.
          }
        }).open();
      };
    
  return (
    <section className='MyPageBox'>
    <div className='box1'>

                <h1>정보 수정하기</h1>
            <div className='userbox'>
            <div className='name'>
                <div className='title'>이름</div>
              <div className='inputbox'>  <input placeholder='이름'/> </div>
                <button className='btn1'>변경하기</button> 
            </div>

            <div className='email'>
            <div className='title'>이메일</div>
                <div className='em'>abc@abcd.com</div>
                <button className='btn1'>비밀번호 변경</button> 

            </div>
            <div className='phoneNum'>
            <div className='title'>전화번호</div>
                <div className='ph'>010-1234-5678</div>
                <button className='btn1'>변경하기</button> 
            </div>

            <div className='addr'>
            <div className='title'>주소</div>
         <button className='btn1'
         onClick={handleAddressSearch}>주소찾기</button> 


            </div>


            <div className='profile'>
            <div className='title'>프로필 이미지</div>
            <input />
                <button className='btn1'>파일선택</button> 
            </div>
             
            </div>


   
    </div>
    <ul className='list'>
        <li>업체정보</li>
        <li>리뷰게시판</li>
        <li>예약현황</li>
        <li className='my'>내정보</li>
        <li>정보 수정하기</li>
        <li>내 예약 내역</li>
        <li>문의현황</li>
    </ul>
</section>

  )
}

export default Myinfo