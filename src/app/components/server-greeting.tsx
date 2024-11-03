import { trpc } from '@/trpc/server'

export async function ServerGreeting() {
  const data = await trpc.greeting.serverHello()

  return (
    <div className="bg-blue-100 border-2 border-blue-500 rounded-md m-2 p-5 space-y-1">
      <div className="text-blue-500 font-bold">Server Component</div>
      <div className='text-black'>{JSON.stringify(data.greeting)}</div>
    </div>
  )
}
