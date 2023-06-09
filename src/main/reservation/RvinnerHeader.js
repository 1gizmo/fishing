import React from 'react'
import './RvScss/RvinnerHeader.scss'


const RvinnerHeader = () => {
  return (

    <div className='rvChoice'>
    <div className='rvbox'>

    <div>날짜선택
        <div>
        <select>
            <option>06-08</option>
            <option>06-09</option>
            <option>06-10</option>
        </select>
        </div>
    </div>

    <div>지역선택
    <div>
        <select>
            <option>06-08</option>
            <option>06-09</option>
            <option>06-10</option>
        </select>
        </div>
    </div>
    <div>세부검색
    <div>
        <input />
        {/* <select>
            <option>06-08</option>
            <option>06-09</option>
            <option>06-10</option>
        </select> */}
        </div>
    </div>
    </div>
  
    <button>검 색</button>
</div>
  )
}

export default RvinnerHeader