import React from 'react'
import { useStore } from '@/store'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Sparkle } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { postPrompt } from '@/handlers/POST'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useToast } from '@/components/ui/use-toast'

interface Props {}

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt must be at least 1 characters.',
  }),
})

const ChatInput: React.FC<Props> = () => {
  const { toast } = useToast()

  const setLoadingAndAddUserMessage = useStore((state) => state.setLoadingAndAddUserMessage)
  const removeLoadingAndAddAIMessage = useStore((state) => state.removeLoadingAndAddAIMessage)
  const isLoading = useStore((state) => state.isLoading)
  const setIsLoading = useStore((state) => state.setIsLoading)

  const mutation = useMutation({
    mutationFn: postPrompt,
    onError: () => {
      console.log('error')
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
      setIsLoading(false)
    },
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      form.reset()
      setLoadingAndAddUserMessage({
        content: values.prompt,
        timestamp: new Date().toISOString(),
        isUser: true,
      })
      const response = await mutation.mutateAsync(values.prompt)
      removeLoadingAndAddAIMessage({
        content: response.data.data.answer,
        timestamp: response.data.data.createdAt,
        isUser: false,
      })
    } catch (e) {
      console.error({ e })
    }
  }

  return (
    <div className="flex w-full items-center space-x-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full space-x-3 mt-6">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="text" placeholder="Add your query here..." {...field} />
                </FormControl>
                <FormDescription className="text-muted-foreground text-xs">
                  Be as descriptive as possible to get the best results. Press ↩ to submit.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={
              form.formState.isSubmitting || !form.formState.isValid || !form.formState.isDirty
            }
            type="submit"
          >
            <Sparkle className={clsx('h-4 w-4 mr-2', isLoading && 'animate-spin')} />
            Generate
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ChatInput
