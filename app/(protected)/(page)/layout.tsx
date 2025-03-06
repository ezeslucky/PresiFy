import { onAuthenticatedUser } from '@/action/user'
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
    <div>
      {children}
    </div>
  )
}

export default Layout
