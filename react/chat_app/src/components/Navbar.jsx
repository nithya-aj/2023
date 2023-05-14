import React, { useContext } from 'react'
import logout from '../images/logout.png'
import img from '../images/img6.jpeg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navItems'>
      <div className="logo">
        Holo Chat
      </div>
      <div className="user">
        <img className='avatar' src={currentUser.photoURL} alt="" />
        <img onClick={()=> signOut(auth)} className='logout' src={logout} alt="" />
      </div>
    </div>
  )
}

export default Navbar