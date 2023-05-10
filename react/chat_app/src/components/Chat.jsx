import React from 'react'
import videoCall from '../images/videoCall.svg'
import addUser from '../images/addUser.svg'
import settings from '../images/settings.svg'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={videoCall} alt="" />
          <img src={addUser} alt="" />
          <img src={settings} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat