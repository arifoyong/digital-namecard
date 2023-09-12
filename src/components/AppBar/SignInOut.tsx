"use client"
import React from 'react'
import Link from 'next/link'
import { signOut, signIn, useSession } from 'next-auth/react'
import { BoxArrowLeft } from 'react-bootstrap-icons'

const getInitial = (fullName: string | undefined | null):string => {
  const name = fullName || ''
  const initialArr = name.split(' ').map((name) => {
    return name[0]
  })

  return initialArr.join('')
}

const SignInOut = () => {
  const { data: session } = useSession()
    if (session && session.user) {    
        return (
            <div className="flex items-center md:flex md:items-center p-2 gap-4">
                <div className="">
                  <Link className="px-2 py-1 bg-purple-800 text-gray-100 rounded-lg" 
                      href="/user">
                      {getInitial(session.user.name)}
                  </Link>
                  
                </div>
                
                <button className="flex text-2xl hover:text-red-600 hover:font-bold hover:cursor-pointer" 
                    onClick={() => signOut({ callbackUrl: 'http://localhost:3000'})}>
                  <BoxArrowLeft/>
                </button>
          
            
            </div>
        )
    }

    return (
        <button className=""  
            onClick={() => signIn('google', { callback: `/user` })  }>
            Login
        </button>
    )
}

export default SignInOut