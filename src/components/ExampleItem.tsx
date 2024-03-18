'use client'

import React from 'react'
import { Sparkle } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { postPrompt } from '@/handlers/POST'
import { useStore } from '@/store'

interface Props {
  content: string
}

const ExampleItem: React.FC<Props> = ({ content }) => {
  const mutation = useMutation({
    mutationFn: postPrompt,
  })

  const setLoadingAndAddUserMessage = useStore((state) => state.setLoadingAndAddUserMessage)
  const removeLoadingAndAddAIMessage = useStore((state) => state.removeLoadingAndAddAIMessage)
  const handleClick = async () => {
    try {
      setLoadingAndAddUserMessage({
        content,
        timestamp: new Date().toISOString(),
        isUser: true,
      })
      const response = await mutation.mutateAsync(content)
      removeLoadingAndAddAIMessage({
        content: response.data.data.answer,
        timestamp: response.data.data.createdAt,
        isUser: false,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer flex items-center space-x-2 hover:bg-purple-100 transition-all duration-100 p-2 rounded-lg"
    >
      <div className="transition-all duration-100 bg-purple-100 group-hover:bg-purple-200 w-fit p-2 rounded-full">
        <Sparkle className="h-4 w-4 text-purple-900" />
      </div>
      <p>{content}</p>
    </div>
  )
}

export default ExampleItem
