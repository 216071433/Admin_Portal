import React from 'react'
import { Card, CardDescription } from '@/components/ui/card'
import {  buttonVariants } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import { DataTable } from './data-table'
import { columns } from './columns'

import Link from 'next/link'

type Subject = {
  id: string
  subjectName: number
  gradeRange: string
  schoolLevel: string
}

const SubjectsPage = async () => {
  
  const subjects: Subject[] = []

 

 

 

  return (
    <div className='flex flex-col p-3 w-full'>
      <Card className='w-full p-5 mb-2'>
        <CardDescription className='flex flex-row items-center justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>
              Subjects Table
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
            Add Subject
          </Link>
        </CardDescription>
      </Card>

      <Card className='w-full p-5'>
        {subjects ? <DataTable columns={columns} data={subjects} /> : <p>No subjects available</p>}
      </Card>

      
      
    </div>
  )
}

export default SubjectsPage