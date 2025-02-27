import { Home, LayoutTemplate, Settings } from "lucide-react";
import { Trash } from 'lucide-react';
export const data ={
    user:{
name: 'shadcnm',
email: 'm@example.com',
avatar: '/avatars/shadcn.jpg'

    },
    navMain:[
        {
            title: 'Home',
            url: '/dashboard',
            icon: Home
        },
        {
            title: 'Templates',
            url: '/templates',
            icon: LayoutTemplate
        },
        {
            title: 'Trash',
            url: '/trash',
            icon: Trash
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: Settings
        },
        
    ]
}