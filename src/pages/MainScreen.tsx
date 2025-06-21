import React from 'react'
import Navbar from '../Components/Navbar'
import LeftColumn from '../Components/LeftMainScreen'
import RightColumn from '../Components/RighMainScreen'
import CenterColumn from '../Components/MiddleMainScreen'
export default function MainScreen () {
  return (
    <div className='h-screen max-w-screen overflow-x-hidden'>
      <Navbar />
          <div className='flex h-screen w-[99%]'>
              <LeftColumn />
              <CenterColumn />
              <RightColumn />
      </div>
    </div>
  )
}
