import React from 'react'
import { Icon } from '@iconify/react';

const Input = () => {
  return (
    <div className='input'>
      <div className='sendBar'>
        <input type="text" placeholder='Type something...' />
        <div className='send'>
          <Icon className='icon' icon="ion:attach" color="#595bd4" />
          <input type="file" style={{ display: 'none' }} id='file' />
          <label htmlFor="file">
            <Icon className='icon' icon="ion:image" color="#595bd4" />
          </label>
          <button>
            <Icon className='icon' icon="fa:send" color="#595bd4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input