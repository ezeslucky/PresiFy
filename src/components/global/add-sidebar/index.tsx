import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
import { Project, User } from '@prisma/client'
import React from 'react'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const  AppSidebar = ({recentProjects,user, ...props}:
    {
        recentProjects:Project[]
    } & {user: User} & React.ComponentProps<typeof Sidebar>
) => {
  return (
    <Sidebar 
    collapsible="icon"
    className=" max-w-[212px]  bg-background-90"
    {...props}
    >
    <SidebarHeader className=" pt-6 px-3 pb-0" >
        <SidebarMenuButton size={'lg'} className=" data-[state=open]:text-sidebar-accent-foreground ">
<div className="flex aspect-square size-0 items-center justify-center rounded-lg text-sidebar-primary-foreground">
    <Avatar className=" h-10 w-10 rounded-full">
<AvatarImage 
src={'/logo.svg'}
alt={'Logo'}
/>
<AvatarFallback className=" rounded-lg">PRESIFY</AvatarFallback>
    </Avatar>
</div>
        </SidebarMenuButton>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  )
}

export default AppSidebar