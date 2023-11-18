import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import onboardingImg from '@/assets/onboarding-image.png'
import Link from 'next/link'
import onboardingImg1 from '@/assets/onboarding-image(2).png'
import 'typeface-nunito'

interface props {
    show: boolean
}

export default function Onboarding({ show }: props) {
    const [visibility, setVisibility] = useState(true)

    useEffect(() => {
        if (!show){
            setTimeout(() => setVisibility(false), 100)
        } else null
    }, [show])
  return (
    <>
        <div className='mobile h-screen bg-primary flex items-center justify-center' style={{ 
            transition: 'all 0.7s ease-out', 
            display: visibility ? 'flex' : 'none',
            opacity: show ? 1 : 0
        }}>
            <Image src={onboardingImg} className='w-9/12' alt='onboarding' style={{
                width: '200px !important'
            }} />
        </div>

        <div className='mobile bg-light flex flex-col items-center justify-between' style={{ 
            display: visibility ? 'none' : 'flex',
            padding: '34px 28px',
            fontFamily: 'nunito !important'
        }}>
            <div className='flex flex-col gap-1.5'>
                <h4 className='text-primary fw-bold text-2xl font-bold' style={{ 
                    fontFamily: 'nunito',
                    lineHeight: 'normal',
                    textAlign: 'center',
                    marginTop: 45
                    }}
                >
                    Your AI Assistant
                </h4>

                <p className='text-grey text-base font-medium' style={{
                    fontFamily: 'nunito',
                    textAlign: 'center',
                    lineHeight: 'normal',
                    maxWidth: 240
                }}>
                    Using this software, you can ask your
                    questions and receive articles using
                    artificial intelligence assistant
                </p>
            </div>

            <Image width={250} alt='onboarding2' src={onboardingImg1} style={{
                width: '300px !important'
            }} />

            <Link href={'/chat'} className='w-full'>
                <button className='bg-primary flex justify-between p-5 items-center h-14 w-full font-semibold text-base hover:opacity-80' style={{
                    borderRadius: 30,
                    fontFamily: 'nunito',
                    transition: 'all 0.5s ease-out'
                }}>
                    <i></i>

                    Continue

                    <i className="bi bi-arrow-right text-light text-xl"></i>
                </button>
            </Link>
        </div>
    </>
  )
}
