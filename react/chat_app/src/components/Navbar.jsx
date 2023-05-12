import React from 'react'
import logout from '../images/logout.png'
import img from '../images/img6.jpeg'

const Navbar = () => {
  return (
    <div className='navItems'>
      <div className="logo">
        Holo Chat
      </div>
      <div className="user">
        <img className='avatar' src={img} alt="" />
        <img className='logout' src={logout} alt="" />
      </div>
    </div>
  )
}

export default Navbar