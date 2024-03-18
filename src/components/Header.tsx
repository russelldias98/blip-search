import React from 'react'

interface Props {}

const ChatInput: React.FC<Props> = () => {
  return (
    <div>
      <h1 className="text-xl">Welcome to Blip</h1>
      <p className="mt-2 text-muted-foreground">An OpenAI based Question Answering tool</p>
    </div>
  )
}

export default ChatInput
