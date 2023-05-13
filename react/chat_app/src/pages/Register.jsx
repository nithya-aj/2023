import React, { useState } from 'react'
import '../style.scss'
import img from '../images/addImg.svg'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (err) => {
                    setErr(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName: name,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, 'users', res.user.uid), {
                            uid: res.user.uid,
                            name,
                            email,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, 'userChats', res.user.uid), {})
                        navigate('/')

                    })
                }
            )

        } catch (err) {
            setErr(true)
        }
    }


    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Holo Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="file" id='file' style={{ display: 'none' }} />
                    <label htmlFor="file">
                        <img src={img} alt="" /><span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span style={{ color: 'red' }}>Something went wrong</span>}
                </form>
                <p>You do have an account? Log in</p>
            </div>
        </div>
    )
}

export default Register