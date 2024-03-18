import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { Sparkle, User } from 'lucide-react'
import { clsx } from 'clsx'
interface Props {
  isUser: boolean
  content: string
  timestamp: string
}

const ChatItem: React.FC<Props> = ({ content, timestamp, isUser }) => {
  return (
    <div className="flex space-x-2 h-full w-full">
      <div>
        {isUser ? (
          <div className="bg-purple-200 w-fit p-2 rounded-full">
            <User className="h-6 w-6 text-purple-800" />
          </div>
        ) : (
          <div className="bg-purple-900 w-fit p-2 rounded-full">
            <Sparkle className="h-6 w-6 text-purple-300" />
          </div>
        )}
      </div>
      <div className={clsx('py-2 px-3 rounded-lg', isUser ? 'bg-gray-50' : 'bg-gray-100')}>
        <p>{content}</p>
        <span className="text-xs text-muted-foreground">{formatDistanceToNow(timestamp)}</span>
      </div>
    </div>
  )
}

export default ChatItem
