export const dynamic = 'force-dynamic'

import { onAuthenticatedUser } from '@/action/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = async (props: Props) => {
    const auth = await onAuthenticatedUser()
    if (!auth.user) redirect('/sign-in')

    return (
        <div className="w-full min-h-screen">
            {props.children}
        </div>
    )
}

export default Layout
