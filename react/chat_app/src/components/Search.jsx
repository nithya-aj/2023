import React from 'react'
import arrow from '../images/arrow-back.svg'

const Search = () => {
  return (
    <div className='search'>
      <img src={arrow} alt="" />  
      <div className="searchForm">
        <input type="text" placeholder='Search users here...' />
      </div>
    </div>
  )
}

export default Search