import React from 'react'
import { TextField, Typography, Stack } from '@mui/material'
import Image from 'next/image'

type props = {
    label: string
    type: 'email' | 'password' | 'text'
    placeholder: string,
    icon: string, 
    onChange?: (e: string) => void
    
}

export default function FormField(props: props) {

    function handleChange(e: string) {
        if (props.onChange){
            props.onChange(e)
        }
    }

    return (
        <div>
        <div>
            <Typography className='text-base text-[#000] leading-[normal] pb-2'>
                {props.label}
            </Typography>

            <Stack direction={'row'} className='relative items-center'>
                <Image 
                    alt='icon'
                    src={props.icon}
                    className='w-5 h-5 absolute left-4' 

                />

                <input 
                    type={props.type}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder={props.placeholder} 
                    className='rounded-2xl border-[1.5px] border-primary h-14 w-full text-grey pl-12 pr-5 py-4 text-base italic'
                    
                />
            </Stack>
        </div>
        </div>
    )
}
