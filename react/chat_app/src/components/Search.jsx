import React, { useState } from 'react'
import arrow from '../images/arrow-back.svg'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase'
import img from '../images/img6.jpeg'

const Search = () => {
  const [searchUser, setSearchUser] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", searchUser))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true)
    }
  }

  const handleKeyDown = e => {
    e.code === "Enter" && handleSearch()
  }
  return (
    <div className='search'>
      <div className="back_arrow">
        <img src={arrow} alt="" />
      </div>
      <div className="searchForm">
        <input type="text" placeholder='Search users here...' onKeyDown={handleKeyDown} onChange={(e) => setSearchUser(e.target.value)} />
      </div>
      <div className="userChat">
        <img src={img} alt="" />
        <div className="userChatInfo">
          <span>Jane Wilsant</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search