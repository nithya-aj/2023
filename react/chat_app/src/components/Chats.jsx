import React from 'react'
import user from '../images/img.jpg'

const Chats = () => {
  return (
    <>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>Jane Wilsant</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>Jane Wilsant</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>Jane Wilsant</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>Jane Wilsant</span>
          <p>hello</p>
        </div>
      </div>
    </>
  )
}

export default Chats