import React, { useState } from 'react'
import '../style.scss'
import img from '../images/addImg.svg'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        if (!name || !email || !password || !file) {
            setErr('Please fill in all the fields.')
            return
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (err) => {
                    setErr('Error uploading the file.')
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            name: name,
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
            // Handle registration errors
            if (err.code === 'auth/email-already-in-use') {
                setErr('The email address is already in use. Please use a different email.');
            } else if (err.code === 'auth/invalid-email') {
                setErr('Invalid email. Please enter a valid email address.');
            } else if (err.code === 'auth/weak-password') {
                setErr('The password is too weak. Please choose a stronger password.');
            } else if (err.code === 'storage/object-not-found') {
                setErr('file was not found or uploaded successfully.');
            } else {
                setErr('An error occurred during registration. Please try again later.');
            }
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
                    {err && <span className='err' style={{ color: 'red' }}>{err}</span>}
                </form>
                <p>You do have an account? <Link to="/login" style={{ textDecoration: 'none', color: 'darkblue' }}>Log in</Link></p>
            </div>
        </div>
    )
}

export default Register