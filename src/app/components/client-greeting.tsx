'use client'

import { trpc } from '@/trpc/client'

export function ClientGreeting() {
  const greeting = trpc.greeting.clientHello.useQuery()

  return (
      <div className="bg-red-100 border-2 border-red-500 rounded-md m-2 p-5 space-y-2">
        <div className="text-red-500 font-bold">Client Component</div>
        <div className='text-black'>{JSON.stringify(greeting.data)}</div>
      </div>
  )
}
