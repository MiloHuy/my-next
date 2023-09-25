'use client'
import { Button } from '@nextui-org/react'
import React from 'react'

const RolePage = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <div className='w-1/3 h-14 
                  transition-all duration-300 
                  ease-in hover:w-1/2 '>
        <Button className="w-full">
          Đăng ký
        </Button >
      </div>
      <div className='w-1/3 h-14 
                  transition-all duration-300 
                  ease-in hover:w-1/2 '>
        <Button className="w-full">
          Đăng nhập
        </Button >
      </div>

    </div>

  )
}

export default RolePage