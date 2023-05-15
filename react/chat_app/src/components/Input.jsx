import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/AuthContext';

const Input = () => {

  const [text, setText] = useState("")
  const [image, setImage] = useState("")

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        (err) => {
          // setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })

          })
        }
      )
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".data"]: serverTimestamp()
    })

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })

    setText("")
    setImage(null)
  }

  return (
    <div className='input'>
      <div className='sendBar'>
        <input type="text" placeholder='Type something...' onChange={e => setText(e.target.value)} value={text || ""} />
        <div className='send'>
          <Icon className='icon' icon="ion:attach" color="#595bd4" />
          <input type="file" style={{ display: 'none' }} id='file' onChange={e => setImage(e.target.files[0])} />
          <label htmlFor="file">
            <Icon className='icon' icon="ion:image" color="#595bd4" />
          </label>
          <button onClick={handleSend}>
            <Icon className='icon' icon="fa:send" color="#595bd4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input