import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {   Bot,   User } from 'lucide-react'


const DashboardBlocks = async () => {
    

    return (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8'>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Total News Feed</CardTitle>
                    <User className='size-4 text-muted-foreground'/>
                </CardHeader>
                <CardContent>
                    <h2 className='text-2xl font-bold'>
                        
                    </h2>
                    <p className='text-xs text-muted-foreground'>
                        Added by admin
                    </p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>AI interactions</CardTitle>
                    <Bot className='size-4 text-muted-foreground'/>
                </CardHeader>
                <CardContent>
                    <h2 className='text-2xl font-bold'>
                        +19056
                    </h2>
                    <p className='text-xs text-muted-foreground'>
                        Total prompts made to the AI!
                    </p>
                </CardContent>
            </Card>
         
        </div>
    )
}

export default DashboardBlocks