import React from 'react'
import avatarImage from '../assets/60111.jpg'

export default function Avatar() {

      interface Friend {
        name: string;
        avatar: string;
        status: string;
      }

    let friend: Array<Friend> = [{
         name: "Ajay",
        avatar: "avatar.png",
        status: "online"
    }]
  return (
      <div className='w-full flex items-center bg-green-500 text-white p-[5px] rounded-2xl m-[5px]'>
          <div className='w-[50px] h-[50px] rounded-full'><img src={avatarImage} className='border rounded-full' /></div>
          <div className='ml-3 font-bold'> Ajay</div>
    </div>
  )
}
