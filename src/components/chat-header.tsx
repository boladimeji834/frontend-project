import React from 'react'
import Image from 'next/image'
import Gpt from '@/assets/blue-robot-mascot-logo-icon-design_675467-55 1 (Traced) (1).svg'
import 'typeface-nunito'
import active from '@/assets/active.png'
import volume from '@/assets/volume-high.svg'
import exp from '@/assets/export.svg'

export default function ChatHeader() {
  return (
    <div className='h-24 flex items-end pb-3.5 px-7 border-b border-ash'>
      <div className='flex justify-between w-full items-center' style={{
        height: 51
      }}>
        <div className='flex h-full items-center' style={{
            gap: 17
        }}>
            <button>
                <i className='bi bi-arrow-left' style={{
                    color: '#292D32',
                    fontSize: 24,
                    lineHeight: 0
                }}></i>
            </button>
            <Image src={Gpt} width={24} alt='chat-gpt' />
            <div className='flex flex-col'>
                <h4 className='text-xl text-primary font-bold' style={{
                    fontFamily: 'nunito',
                    lineHeight: 'normal'
                }}>
                    ChatGPT
                </h4>

                <h4 className='text-success flex items-center font-medium' style={{
                    fontFamily: 'nunito',
                    lineHeight: 'normal',
                    fontSize: 17,
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
