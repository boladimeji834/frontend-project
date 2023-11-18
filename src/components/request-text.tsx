import React from 'react'

export default function Request() {
  return (
    <div className='self-end flex items-center p-5 bg-primary' style={{
      minHeight: 54,
      width: 'calc(100% - 1.625rem)',
      borderRadius: '25px 0px 25px 25px'
    }}>
      <p className='text-sm font-bold text-light' style={{
        fontFamily: 'nunito'
      }}>
        Hello ChatGPT, how are you doing today?
      </p>
    </div>
  )
}
