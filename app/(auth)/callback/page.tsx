import { onAuthenticatedUser } from '@/action/user'
import { redirect } from 'next/navigation'


const AuthCallbackPage = async () => {
    const auth = await onAuthenticatedUser()

    if(auth.status === 200 || auth.status == 201){
        redirect('/dashboard')
    }
    else if( auth.status === 403|| auth.status === 400 || auth.status === 500){
redirect('/sign-in')
    }
 
}

export default AuthCallbackPage
