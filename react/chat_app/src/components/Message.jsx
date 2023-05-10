import React from 'react'
import user from '../images/img6.jpeg'

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={user} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src={user} alt="" />
            </div>
        </div>
    )
}

export default Message