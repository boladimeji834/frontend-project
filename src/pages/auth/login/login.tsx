import React from 'react' 
import AuthLayout from '../../../components/auth-layout'
import FormField from '../../../components/form-field' 
import emailIcon from '@/assets/icons/email-icon.svg'
import passwordIcon from '@/assets/icons/password-icon.svg'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Login() {
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

                    />

                    <FormField
                        label='Password'
                        type='email'
                        placeholder='*********'
                        icon={passwordIcon}

                    />
                </div>
                
                <Link href='/auth/register' className='text-primary text-xs underline'>
                    Forgot Password?
                </Link>

                <Button 
                    variant='contained'
                    className='mt-7 bg-primary h-14 rounded-[1rem] normal-case font-bold text-base'
                    disableElevation
                >
                    Login
                </Button>
            </AuthLayout>
        </div>
    )
}
