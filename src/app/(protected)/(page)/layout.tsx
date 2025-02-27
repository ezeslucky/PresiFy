import { onAuthenticatedUser } from '@/action/user'
import AppSidebar from '@/components/global/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'
import React from 'react'
type Props = {
    children: React.ReactNode
}
const  Layout = async ({children}: Props) =>  {

    const checkUser = await onAuthenticatedUser()
    if(!checkUser.user){
        redirect('/sign-in')
    }
  return (
   <SidebarProvider>
    <AppSidebar></AppSidebar>
   </SidebarProvider>
  )
}

export default Layout
