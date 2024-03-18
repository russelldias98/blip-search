'use client'

import React from 'react'
import ChatMessages from '@/modules/ChatMessages'
import ChatInput from '@/modules/ChatInput'

interface Props {}

const Chat: React.FC<Props> = () => {
  return (
    <div className="space-y-4">
      <ChatMessages />
      <ChatInput />
    </div>
  )
}

export default Chat
