import React, { ReactNode } from 'react'

export default function LayoutAuth({children} : {children: ReactNode}) {
  return (
    <div className='flex justify-center items-center h-screen'>
      {children}
    </div>
  )
}
