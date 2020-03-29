import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

function SignIn(params) {
    const [signIn, setSignIn] = useState(
        {
            email: '',
            password: ''
        }
    )

    function handleSubmit(event) {
        event.preventDefault();
        setSignIn({ email: '', password: '' });       
    }

    function handleChange(event) {
        const { value, name } = event.target;

        setSignIn(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email" 
                    value={signIn.email}
                    handleChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={signIn.password}
                    handleChange={handleChange}
                    label='password'
                    required />                
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle}>
                    {' '}Sign In With Google{' '}
                </CustomButton>
            </form>
        </div>
    )
}

export default SignIn;
