import React from 'react'
import ChatItem from '@/components/ChatItem'
import { ChatLoader } from '@/modules/ChatLoader'
import { useStore } from '@/store'

interface Props {}

const ChatMessages: React.FC<Props> = () => {
  const messages = useStore((state) => state.messages)
  const isLoadingQuery = useStore((state) => state.isLoading)

  return (
    <div className="flex flex-col space-y-3">
      {messages.map((message, index) => (
        <ChatItem
          isUser={message.isUser}
          timestamp={message.timestamp}
          key={message.content}
          content={message.content}
        />
      ))}
      {isLoadingQuery && <ChatLoader />}
    </div>
  )
}

export default ChatMessages
