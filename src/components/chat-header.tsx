import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setChatState } from '@/store/chatReducer'
import Gpt from '@/assets/blue-robot-mascot-logo-icon-design_675467-55 1 (Traced) (1).svg'
import 'typeface-nunito'
import active from '@/assets/active.png'
import volume from '@/assets/volume-high.svg'
import exp from '@/assets/export.svg'

export default function ChatHeader() {
    const dispatch = useDispatch()

    const handleNav = () => {
        dispatch(setChatState(false))
    }
  return (
    <div className='flex items-end pt-4 pb-3.5 px-7 border-b border-ash'>
      <div className='flex justify-between w-full items-center' style={{
        height: '3.125rem'
      }}>
        <div className='flex h-full items-center' style={{
            gap: 17
        }}>
            <button onClick={() => handleNav()}>
                <i className='bi bi-arrow-left text-2xl' style={{
                    color: '#292D32',
                    lineHeight: 0
                }}></i>
            </button>
            <Image src={Gpt} width={24} alt='chat-gpt' />
            <div className='flex flex-col'>
                <h4 className='text-l text-primary font-bold' style={{
                    fontFamily: 'nunito',
                    lineHeight: 'normal'
                }}>
                    ChatGPT
                </h4>

                <h4 className='text-success text-base flex items-center font-medium' style={{
                    fontFamily: 'nunito',
                    lineHeight: 'normal',
                    gap: 5
                }}>
                    <Image alt='active' src={active} />
                    Online
                </h4>
            </div>
        </div>

        <div className='flex h-full items-center' style={{
            gap: 17
        }}>
            <button>
                <Image alt='volume' src={volume} />
            </button>

            <button>
                <Image alt='export-chat' src={exp} />
            </button>
        </div>
      </div>
    </div>
  )
}
