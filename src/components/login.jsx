import React, { useState }from 'react';
import { auth } from '../firebase/firebase'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError("")

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <form onsubmit={handleSubmit}>
                <p>Fill in the form below to register new account</p>
                <div>
                    <input 
                        type="email" 
                        placeholder='Email'
                        name='email'
                        onChange={handleEmailChange}
                        value={email}
                        />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder='password'
                        name='password'
                        onChange={handlePassChange}
                        value={password}
                        />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type='submit'>Login</button>
                    <hr />
                    <p>
                        Already have an account? <Link to='/login'> Sign in</Link>
                    </p>
                </div>
            </form>
        </div>)
}