import { Skeleton } from '@/components/ui/skeleton'

export function ChatLoader() {
  return (
    <div className="flex items-center space-x-2">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-8 w-[300px]" />
      </div>
    </div>
  )
}
