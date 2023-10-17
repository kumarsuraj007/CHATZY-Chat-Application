import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar-component'
import Chat from '../../components/chat/Chat-component'

const Chatzy = () => {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Chatzy
