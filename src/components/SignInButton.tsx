"use client"
import { signOut, signIn, useSession } from 'next-auth/react'
import LogOutButton from './svg/logout'

const SignInButton = () => {
    const { data: session } = useSession()
    if (session && session.user) {    
        return (
            <div className="flex gap-2 ml-auto items-center">
                <p className="text-blue-800">
                    {session.user.name}
                </p>
                
                <div className="p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer">
                    <LogOutButton onClick={() => signOut({ callbackUrl: 'http://localhost:3000'})}
                        className="w-4 h-4 fill-current text-red-800"/>
                </div>
            
            </div>
        )
    }

    return (
        <button className="text-slate-800"  
            onClick={() => signIn('google', { callback: `http://localhost:3000/user` }   )  }>
            Login
        </button>
    )
}

export default SignInButton