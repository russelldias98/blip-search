import React from 'react'
import TrainingData from '@/modules/TrainingData'

interface Props {}

const ChatInput: React.FC<Props> = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-xl">Welcome to Blip</h1>
        <p className="mt-2 text-muted-foreground">An OpenAI based Question Answering tool</p>
      </div>
      <TrainingData />
    </div>
  )
}

export default ChatInput
