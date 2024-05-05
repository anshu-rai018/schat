import React from 'react'
import SnapchatLogo from '@/public/Snapchat-logo.svg'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Ghost } from 'lucide-react'
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4 ">
      <div className='flex items-center gap-2' >
        <Image src={SnapchatLogo} alt='snapchat-logo' width={100} height={100} />
        <Input type="text" placeholder="Search" className="rounded-full" />

      </div>

      <div>
        <Button variant={'ghost'}>Stories</Button>
        <Button variant={'ghost'}>SpotLight</Button>
        <Button variant={'ghost'}>Chat</Button>
        <Button variant={'ghost'}>Lenses</Button>
      </div >

      <div className='flex items-center gap-5'>
        <Button size={'icon'} variant={'secondary'} className="rounded-full bg-white text-black"><TbGridDots /></Button>
        <Button className='rounded-full'>Snapchat Ads</Button>
        <Button className='rounded-full'>Download</Button>
        <Button size={'icon'} className='rounded-full'>
          <IoMdLogOut /></Button>
      </div>
    </div>
  )
}

export default Navbar
