import React, { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message, 'hang 0575')
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result, "consoling result")
                setUser(null)
            })
            .catch(error => {
                console.log(error, "logout error")
            })
    }


    return (
        <>
            <div>this is login page</div>
            {user ?
                <button onClick={handleGoogleSignOut} className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Sign Out Google</button> :
                <button onClick={handleGoogleSignIn} className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Click to Google login</button>}
            {user && <div>
                <h3>User : {user?.displayName}</h3>
                <h5>User : {user?.email}</h5>
                <img className='rounded-full m-5' src={user.photoURL} alt="" />
            </div>
            }
        </>
    )
}

export default Login