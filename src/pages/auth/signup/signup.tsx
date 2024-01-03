/* eslint-disable react/no-unescaped-entities */
import React from 'react' 
import AuthLayout from '../../../components/auth-layout'
import FormField from '../../../components/form-field' 
import emailIcon from '@/assets/icons/email-icon.svg'
import passwordIcon from '@/assets/icons/password-icon.svg'
import Link from 'next/link'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import googleIcon from '@/assets/icons/google-icon.png'
import nameIcon from '@/assets/icons/name-icon.svg'
import useAuthApi from '@/hooks/auth.api'
import { useState } from 'react'

type input = {
    name: string, 
    password: string,
    email: string
}

export default function Signup() {
    const { signUp, user } = useAuthApi()
    const [ input, setInput ] = useState<input>({
        email: '', 
        password: '', 
        name: ''
    })
    return (
        <div>
            <AuthLayout 
                title='Register' 
                text='Create an account to access all the features of Maxpense!'
            >
                <div className='flex flex-col gap-7'>
                    <FormField
                        label='Email'
                        type='email'
                        placeholder='Ex: abc@example.com'
                        icon={emailIcon}
                        onChange={(e) => {
                            setInput((prev) => ({
                                ...prev,
                                email: e
                            }))
                        }}

                    />

                    <FormField
                        label='Name'
                        type='text'
                        placeholder='Ex. Saul Ramirez'
                        icon={nameIcon}
                        onChange={(e) => {
                            setInput((prev) => ({
                                ...prev,
                                name: e
                            }))
                        }}

                    />

                    <FormField
                        label=' Your Password'
                        type='email'
                        placeholder='*********'
                        icon={passwordIcon}
                        onChange={(e) => {
                            setInput((prev) => ({
                                ...prev,
                                password: e
                            }))
                        }}

                    />
                </div>
            
                <Button
                    variant='contained'
                    className='mt-7 bg-primary h-14 rounded-[1rem] normal-case font-bold text-base'
                    disableElevation
                    onClick={() => signUp(input.name, input.password, input.email)}
                >
                    Register
                </Button>

                <div className='gap-1.5 flex items-center w-full my-10 mx-12'>
                    <Typography className='text-base text-[#000] leading-[normal]
                    '>
                        Already have an account?
                    </Typography>
                    
                    <Link 
                        href='/auth/login' 
                        className='w-16 text-primary underline font-bold text-base'    
                    >
                        Login
                    </Link>
                </div>
            </AuthLayout>
        </div>
    )
}
