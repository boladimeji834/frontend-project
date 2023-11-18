import React from 'react'
import Image from 'next/image'
import chatbotImg from '@/assets/blue-robot-mascot-logo-icon-design_675467-55 1 (Traced) (1).svg'
import { IChatComponentProp } from '@/data/data'

export default function Response(props: IChatComponentProp) {
  return (
    <div className='self-start flex items-end' style={{
        gap: 7,
        paddingBottom: 10
    }}>
        <div className='flex items-center justify-center' style={{
            width: 26,
            height: 26,
            boxShadow: '0px 1.96226px 1.96226px 0px rgba(0, 0, 0, 0.05)',
            marginBottom: -12,
            background: '#fff',
            borderRadius: '50%'
        }}>
            <Image alt='chatbot-image' src={chatbotImg} />
        </div>

        <div className='p-5 flex justify-center items-center' style={{
            minHeight: 54,
            maxWidth: 'calc(100% - 1.625rem)',
            minWidth: 54,
            borderRadius: '25px 25px 25px 0px',
            background: '#eee'
        }}>
            <p className='text-base font-medium text-grey' style={{
                fontFamily: 'nunito'
            }}>
                {props.text}
            </p>
        </div>
    </div>
  )
}
