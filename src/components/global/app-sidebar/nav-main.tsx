 'use client'
 import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Clock } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



function NavMain({
    items,
}:{
    items:{
        title: string,
        url: string,
        icon: React.FC<React.SVGProps<SVGAElement>>
        isActive?: boolean
        items?:{
            title: string
            url: string
        }[]
    }[]
}) {

    const pathname = usePathname()
  return (
    <SidebarGroup className='p-0'>
        <SidebarMenu>
            {items.map((item,idx ) => (
                <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title} className={`${pathname.includes(item.url) && "bg-background-"}`} >
<Link href={item.url} className={`  text-lg ${pathname.includes(item.url) && 'font-bold'}`}>
<item.icon  className=' text-lg'></item.icon>
<span>{item.title}</span>
</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            ))}
        </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavMain