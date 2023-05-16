import React, { useContext } from 'react'
import logout from '../images/logout.png'
import img from '../images/img6.jpeg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navItems'>
      <div className="logo">
        Holo Chat
      </div>
      <div className="user">
        <img className='avatar' src={currentUser.photoURL} alt="" />
        <AiOutlineLogout className='logout' onClick={() => signOut(auth)} />
      </div>
    </div>
  )
}

export default Navbar