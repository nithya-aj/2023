import React, { useContext } from 'react'
import videoCall from '../images/videoCall.svg'
import addUser from '../images/addUser.svg'
import settings from '../images/settings.svg'
import arrow from '../images/arrow-back.svg'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <div className='rightMenu'>
          <img src={arrow} alt="" />
          <span>{data.user?.name}</span>
        </div>
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