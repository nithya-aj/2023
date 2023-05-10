import React from 'react'
import '../style.scss'
import img from '../images/addImg.svg'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Holo Chat</span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="file" id='file' style={{display:'none'}}/>
                    <label htmlFor="file">
                        <img src={img} alt="" /><span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Log in</p>
            </div>
        </div>
    )
}

export default Register