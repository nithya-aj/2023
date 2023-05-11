import React from 'react'
import user from '../images/img6.jpeg'
import img from '../images/img.jpg'

const Message = () => {
    return (
        <>
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
            <div className='message '>
                <div className="messageInfo">
                    <img src={user} alt="" />
                    <span>just now</span>
                </div>
                <div className="messageContent">
                    <p>Hai</p>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default Message