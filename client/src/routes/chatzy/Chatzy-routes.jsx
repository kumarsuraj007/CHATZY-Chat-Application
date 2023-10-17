import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar-component'
import Chat from '../../components/chat/Chat-component'

const Chatzy = () => {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='border-l border-gray-300'></div> {/* Add this div for the line */}
      <Chat />
    </div>
  )
}

export default Chatzy