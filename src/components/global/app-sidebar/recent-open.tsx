import { Button } from '@/components/ui/button'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Project } from '@prisma/client'
import { JsonValue } from '@prisma/client/runtime/library'
import React from 'react'
import { toast } from 'sonner'

type Props = {
  recentProjects: Project[]
}

function RecentOpen({recentProjects}: Props) {
  
  const handleClick = (projectId: string, slides:JsonValue) =>{
if(!projectId || !slides){
  toast.error('Project not Found',{
    description: 'Please try again'
      })
      return
}
  }
  
  return recentProjects.length > 0 ? (
    <SidebarGroup>
    <SidebarGroupLabel>
      Recently Opened
    </SidebarGroupLabel>
    <SidebarMenu>
      {recentProjects.length > 0 
      ? recentProjects.map((item) => (
         <SidebarMenuItem key={item.id}>
         <SidebarMenuButton asChild tooltip={item.title} className={` hover:bg-primary-80`}>
 <Button onClick={()=> handleClick(item.id, item.slides)} variant={'link'}  className={` text-xs items-center justify-center`}>
 <span>{item.title}</span>
 </Button>
         </SidebarMenuButton>
       </SidebarMenuItem>
      )) : (
        ''
      )}
    </SidebarMenu>
   </SidebarGroup>
  ): (

    <></>
  )
}

export default RecentOpen