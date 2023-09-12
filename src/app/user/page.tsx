"use client"

import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import { IVcard } from '@/lib/types/interfaces'
import { useSession } from 'next-auth/react'
import CardThumbnail  from '@/components/CardThumbnail'
import { TrashFill, PencilSquare } from 'react-bootstrap-icons'
import { useConfirmAlert } from '@/components/Providers/AlertProviders'

const getCards = async (userId: string | null | undefined): Promise<IVcard[]> => {
  const data = await fetch(`http://localhost:3000/api/card/user/${userId}`)
  const allCards = await data.json()
  return allCards
}

const UserPage =  () => {
  const router = useRouter()
  const { data: session } = useSession()
  const { showAlert } = useConfirmAlert()

  const handleDelete = (cardId: string) => {
    showAlert({
      title: "Confirm deletion",
      confirmMessage: `Are you sure to delete card: ${cardId}?`,
      async onConfirm() {
        fetch(`/api/card/${cardId}`, {
          method: "DELETE", 
          headers: {
                "content-type": "application/json"
        }
        }).then( async (res) => {
                if (res.status !== 200) {
                    alert("Error")
                }
                window.location.reload()
        })
      }
    })
  }

  const [allCards, setAllCards ] = useState<IVcard[]>([])

  useEffect( () => {
    const getAllCardsData = async () => {
      const data: IVcard[] = await getCards(session?.user?.id)
      setAllCards(data)
    }
    console.log("There is a change in session data", new Date())
    getAllCardsData()
  }, [session])
  

  return (
    <div className="flex flex-col w-full p-8">
      <div className="container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        { allCards.map(card => (
          <div key={card.id} className="flex flex-col">
            <div className="flex justify-end">
              <div  className="absolute flex" >
                  <Link href={`/user/${session?.user?.id}/card/${card.id}`}>
                    <div className="bg-gray-100 opacity-80 text-yellow-600 px-2 py-1 mr-2 mt-2 rounded-full hover:opacity-100">
                      <PencilSquare/> 
                    </div>
                  </Link>
                  <button onClick={() => handleDelete(card.id)}>
                    <div className="bg-gray-100 opacity-80 text-red-600 px-2 py-1 mr-2 mt-2 rounded-full hover:opacity-100"> 
                      <TrashFill />
                    </div>
                  </button>
              </div>
              
              
            </div>
            <CardThumbnail key={card.id} data={card}/>
          </div>
        ))}

        <div className="flex bg-white border-2 border-dashed rounded-xl py-24 m-12 text-gray-500 text-3xl font-bold hover:border-red-500 hover:text-red-500">
          <Link className="flex w-full h-full items-center justify-center" 
              href={`/user/${session?.user?.id}/card`}>
            +
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default UserPage