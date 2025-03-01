/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRecentProject } from '@/action/projects'
import { onAuthenticatedUser } from '@/action/user'
import AppSidebar from '@/components/global/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'
import React from 'react'
type Props = {
    children: React.ReactNode
}
const  Layout = async ({children}: Props) =>  {
const recentProjects = await getRecentProject()
    const checkUser = await onAuthenticatedUser()
    if(!checkUser.user){
        redirect('/sign-in')
    }
  return (
   <SidebarProvider>
    <AppSidebar user={checkUser.user} recentProjects={recentProjects.data || []}/>
    
   </SidebarProvider>
  )
}

export default Layout
