import { Skeleton } from '@/components/ui/skeleton'

export function TableLoader() {
  return (
    <div className="flex flex-col space-y-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} className="h-[20px] w-full rounded-xl" />
      ))}
    </div>
  )
}
