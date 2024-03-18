import Chat from '@/modules/Chat'
import HeaderSection from '@/modules/HeaderSection'

export default function Home() {
  return (
    <main className="flex h-full overflow-auto justify-between flex-col space-y-8 rounded-md border border-input bg-white p-6 text-sm shadow-sm">
      <HeaderSection />
      <Chat />
    </main>
  )
}
