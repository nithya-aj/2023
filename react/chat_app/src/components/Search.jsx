import React, { useContext, useState } from 'react'
import arrow from '../images/arrow-back.svg'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

const Search = () => {
  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext);

  const handleSearch = async () => {
    console.log('handleSearch');
    const q = query(
      collection(db, "users"),
      where("name", "==", userName)
    );

    try {
      console.log('handleSearch try block');
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(user, 'user')
      });
    } catch (err) {
      console.log('handleSearch');
      setErr(true);
    }
  }

  const handleKey = (e) => {
    console.log('handleKey');
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group exists or not
    const combinedId = currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;
    console.log(combinedId, 'combinedId');
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      console.log(res.data(), 'res.data()');

      if (!res.exists()) {
        console.log('is res exists???');
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            name: user.name,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            name: currentUser.name,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) { }
    console.log('is error happened?');
    dispatch({ type: "CHANGE_USER", payload: user });
    setUser(null);
    setUserName("")
  };

  console.log(user);
  return (
    <div className='search'>
      <div className="back_arrow">
        <img src={arrow} alt="" />
      </div>
      <div className="searchForm">
        <input type="text" placeholder='Search users here...' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} value={userName} />
      </div>
      {err && <span style={{ color: 'red' }}>User not found!</span>}
      {user &&
        (<div className="userChat" onClick={handleSelect} >
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.name}</span>
          </div>
        </div>)}
    </div>
  )
}

export default Search