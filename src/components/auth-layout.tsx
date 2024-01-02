import React from 'react'
import { IconButton, Typography } from '@mui/material'

type Props = {
    children?: React.ReactNode
    title?: string
    text?: string
}

export default function AuthLayout(Props: Props) {
    return (
        <div className='px-9 py-14 flex flex-col justify-start'>
            <IconButton className='mb-5 w-[fit-content]'>
                <i className="bi bi-arrow-left"></i>
            </IconButton>

            <Typography className='text-3xl text-primary font-bold pb-4'>
                {Props.title}
            </Typography>

            <Typography className='text-base text-[#000] leading-[normal] pt-0.5 pb-10'>
                {Props.text}
            </Typography>

            {Props.children}
        </div>
    )
}
