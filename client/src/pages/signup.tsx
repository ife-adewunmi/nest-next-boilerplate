import React, { FormEvent, useState } from 'react'
import Head from 'next/head'
import { Container } from '../components/Container'
import InputField from '../components/InputField'
import { useAuthDispatch, useAuthState } from '../context/auth'
import { useRouter } from 'next/router'
import axios from 'axios'
import { mapErrors } from '../utils/mapErrors'
import { SocialLogin } from '../components/SocialLogin'
import { SERVER_URL } from '../utils/constants'

interface signUpProps {

}

const signUp: React.FC<signUpProps> = ({}) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [displayName, setDisplayName] = useState<string>('')

    const [errors, setErrors] = useState<any>({})
    const dispatch = useAuthDispatch()
    const { authenticated } = useAuthState()

    const router = useRouter()
    if (authenticated) {
        if(router.pathname === '/signin') {
            router.push('/')
        }
        router.back()
    }

    const submitForm = async (event: FormEvent) => {
        event.preventDefault()
    
        try {
            const res = await axios.post('/auth/local/register', {
                email,
                password,
                firstName,
                lastName,
                displayName
            })
            dispatch('LOCAL_REGISTER', res.data.user)
            router.back()
        } catch (err: any) {
            setErrors(mapErrors(err.response.data))
        }
    }

    return (
        <div>
            <Head>
                <title>Sign up</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
            {/* FORM */}
            <div className="w-96">
            <form onSubmit={submitForm}>
                        <div className="mb-6">
                        </div>
                        <InputField
                            label="Email"
                            type="email"
                            value={email}
                            setValue={setEmail}
                            placeholder="Enter your email"
                            error={errors.email}
                        />
                        <InputField
                            label="Pasword"
                            type="password"
                            value={password}
                            setValue={setPassword}
                            placeholder="Enter your password"
                            error={errors.password}
                        />
                        <InputField
                            label="First name"
                            type="text"
                            value={firstName}
                            setValue={setFirstName}
                            placeholder="Enter your first name"
                            error={errors.firstName}
                        />
                        <InputField
                            label="Last name"
                            type="text"
                            value={lastName}
                            setValue={setLastName}
                            placeholder="Enter your last name"
                            error={errors.lastName}
                        />
                        <InputField
                            label="Display name"
                            className="mb-4"
                            type="text"
                            value={displayName}
                            setValue={setDisplayName}
                            placeholder="Enter your display (nick) name"
                            error={errors.displayName}
                        />
                        <button className="w-full mb-4 btn">
                            Submit
                        </button>
                    </form>
                    <SocialLogin provider="Google" url={`${SERVER_URL}/auth/google`}/>
                    <SocialLogin provider="Facebook" url={`${SERVER_URL}/auth/facebook`}/>
                </div>
            </Container>
        </div>
    )
}

export default signUp