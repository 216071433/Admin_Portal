import React from 'react'
import { Card, CardDescription } from '@/components/ui/card'
import {  buttonVariants } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import { DataTable } from './data-table'
import { columns } from './columns'

import Link from 'next/link'

type Story = {
  id: string
  heading: string
  story: string
  date: string
  actions: string
}

const StoryPage = async () => {
  
  const storys: Story[] = []

  const response = await fetch("http://localhost:5000/api/news")

  if (!response.ok) {
    throw new Error("Failed to fetch stories")
  }

  const data = await response.json()

 

 

  return (
    <div className='flex flex-col p-3 w-full'>
      <Card className='w-full p-5 mb-2'>
        <CardDescription className='flex flex-row items-center justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>
              List of All Stories
            </h2>
            <p className='text-[12px] font-thin'>
              List of all subjects offered on the app
            </p>
          </div>

          <Link
            href={'/dashboard/subjects/create'}
            className={buttonVariants()}
          >
            <CirclePlus className='size-4'/>
            Add Story
          </Link>
        </CardDescription>
      </Card>

      <Card className='w-full p-5'>
        {storys ? <DataTable columns={columns} data={data} /> : <p>No stories available</p>}
      </Card>

      
      
    </div>
  )
}

export default StoryPage