import { create } from 'zustand'

// Define a type for the store's state
interface Message {
  content: string
  timestamp: string
  isUser: boolean
}

type CounterState = {
  setLoadingAndAddUserMessage: (message: Message) => void
  removeLoadingAndAddAIMessage: (message: Message) => void
  messages: Message[]
  isLoading: boolean
}

export const useStore = create<CounterState>((set) => ({
  // Initial state
  messages: [],
  isLoading: false,
  // Actions
  setLoadingAndAddUserMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
      isLoading: true,
    })),
  removeLoadingAndAddAIMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
      isLoading: false,
    })),
}))
