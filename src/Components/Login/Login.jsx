import React, { useState } from 'react'
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser, "google loggedInUser");
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message, 'hang 0575')
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log("git login user", loggedInUser)
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error, 'hang github')
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
                <button onClick={handleGoogleSignOut} className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Log Out</button> :
                <div>
                    <button onClick={handleGoogleSignIn} className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Click to Google login</button>
                    <button onClick={handleGithubSignIn} className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Click to Github login</button>
                </div>
            }
            {user && <div>
                <h3>User : {user?.displayName} </h3>
                <h5>User : {user?.email}</h5>
                <img className='rounded-full m-5' src={user.photoURL} alt="" />
                <h5>User ID : <span className='font-bold'>{user?.uid}</span></h5>
                <h5>Shanto The bolod</h5>
            </div>
            }
        </>
    )
}

export default Login