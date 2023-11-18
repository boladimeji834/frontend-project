import React from 'react'
import Image from 'next/image'
import mic from '@/assets/microphone-2.png'
import send from '@/assets/send.png'
import 'typeface-nunito'
import { useDispatch, useSelector } from 'react-redux'
import { setChatState } from '@/store/chatReducer'

export default function Input() {
  const dispatch = useDispatch()
  return (
    <div className='w-full px-6' style={{
        height: 56,
        position: 'absolute',
        bottom: 36,
        transform: 'translateX(-50%)',
        left: '50%',
    }}>
      <div className='h-full bg-light flex justify-between items-center' style={{
        boxShadow: '5px 4px 20px 0px rgba(0, 0, 0, 0.13)',
        borderRadius: 30
      }}>
        <input placeholder='Message ChatGPT' className='pl-5 border-0 text-base font-bold w-full' style={{
            outline: 0,
            fontFamily: 'nunito',
            color: '#9ca3af'
        }} />
        <div className='flex px-3.5' style={{
            gap: 7
        }}>
            <button>
                <Image alt='mic' src={mic} style={{
                    width: '28px'
                }} />
            </button>

            <button>
                <Image alt='send' src={send} style={{
                    width: '28px'
                }} />
            </button>
        </div>
      </div>
    </div>
  )
}
