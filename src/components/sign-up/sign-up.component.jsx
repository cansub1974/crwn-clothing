import React, { useState }from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.scss';

function SignUp() {

    const [signUp, setSignUp] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    )

    async function handleSubmit (event) {
        event.preventDefault();
        const { displayName, email, password, confirmPassword }=signUp;
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setSignUp({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error);           
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setSignUp(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        })
    }

    

    const { displayName, email, password, confirmPassword } = signUp;

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                ></FormInput>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                ></FormInput>
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                ></FormInput>
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                ></FormInput>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}



export default SignUp;