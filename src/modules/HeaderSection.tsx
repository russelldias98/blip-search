import React from 'react'
import Examples from '@/modules/Examples'
import Header from '@/components/Header'

interface Props {}

const ChatInput: React.FC<Props> = () => {
  return (
    <div className="space-y-6">
      <Header />
      <Examples />
    </div>
  )
}

export default ChatInput
