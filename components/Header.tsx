import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>

      <div>
        <h1 className='text-7xl font-medium'>Snapchat is <br/>now on the<br/> web!</h1>
        <h1 className='my-5 text-xl'>Chat, Snap, and video call your friends from <br/> wherever you are.</h1>

      </div>
      
      <div>
<Image src={MyAi} alt="myai" height={650}  width={700}/>
      </div>

    </div>
  )
}

export default Header
