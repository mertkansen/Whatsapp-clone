import React from 'react'
import './Login.css'

// Firebase
import { auth, provider } from './firebase'

// Context
import { useStateValue } from './StateProvider'

import { Button } from '@material-ui/core'
import { actiontypes } from './reducer'



function Login() {
    const [{}, dispatch] = useStateValue()


    const signIn = () => { 
        auth
            .signInWithPopup(provider)
            .then( 
                result => {
                    dispatch({
                        type: actiontypes.SET_USER,
                        user: result.user
                    })
                })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://cdn.iconscout.com/icon/free/png-256/whatsapp-2038531-1718516.png" 
                    alt="" 
                />

                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
