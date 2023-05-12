import React from 'react'
import Search from './Search'
import Chats from './Chats'
import Navbar from './Navbar'

const ChatList = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="sidebar_small">
                <Search />
                <Chats />
            </div>
        </div>
    )
}

export default ChatList