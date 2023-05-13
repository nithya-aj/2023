import React from 'react'
import Search from '../components/Search'
import Chats from '../components/Chats'
import Navbar from '../components/Navbar'

const Users = () => {
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

export default Users