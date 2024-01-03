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
import { useState } from 'react'
import useAuthApi from '@/hooks/auth.api'


type input = {
    email: string, 
    password: string
}

export default function Login() {
    const  { login }  = useAuthApi()
    const [ input, setInput ] = useState<input>({
        email: '',
        password: '',
    })
    
    return (
        <div>
            <AuthLayout 
                title='Login' 
                text='Login now to track all your expenses and income at a place!'
            >
                <div className='flex flex-col gap-7'>
                    <FormField
                        label='Email'
                        type='email'
                        placeholder='Ex: abc@example.com'
                        icon={emailIcon}
                        onChange={(e) => setInput((prev) => ({
                            ...prev, 
                            email: e
                        }))}

                    />

                    <FormField
                        label='Password'
                        type='email'
                        placeholder='*********'
                        icon={passwordIcon}
                        onChange={(e) => setInput((prev) => ({
                            ...prev, 
                            password: e
                        }))}

                    />
                </div>
                
                <Link href='/auth/register' className='text-primary text-xs underline'>
                    Forgot Password?
                </Link>

                <Button 
                    variant='contained'
                    className='mt-7 bg-primary h-14 rounded-[1rem] normal-case font-bold text-base'
                    disableElevation
                    onClick={() => {
                        login(input.password, input.email)
                    }}
                    
                >
                    Login
                </Button>

                <div className='h-px bg-[#000] my-8'>

                </div>

                <Button 
                    className='rounded-[1rem] bg-[#fff] border-[1.5px] h-14 normal-case text-base
                     text-primary font-bold border-primary flex gap-2' variant='outlined' 
                    disableElevation
                    
                >
                    <Image 
                        alt='icon'
                        src={googleIcon}
                        className='w-4 h-4'
                    />
                    Continue with Google
                </Button>

                <div className='gap-1.5 flex items-center w-full my-10 mx-12'>
                    <Typography className='text-base text-[#000] leading-[normal] w-44'>
                        Don't have an account?
                    </Typography>
                    
                    <Link 
                        href='/auth/signup' 
                        className='w-16 text-primary underline font-bold text-base'    
                    >
                        Register
                    </Link>
                </div>
            </AuthLayout>
        </div>
    )
}
