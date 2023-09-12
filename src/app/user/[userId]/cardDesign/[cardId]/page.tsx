"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { IVcard } from '@/lib/types/interfaces'
import { allDesigns } from '@/components/CardDesign/AllDesign';

const dummyData: IVcard = {
  id          :  'dummyId',
  prefix      : '',
  firstName   : 'Stephen',
  lastName    : 'Kaplan',
  company     : 'Acme Corporation',
  jobTitle    : 'CFO',
  jobRole     : 'Finance & Accounting',
  email       : 'stephen.kaplan@acme.com',
  phoneNo     : '05-28102940',
  hpNo        : '83929303',
  street      : '100 Dollar Street',
  city        : 'Wachovia',
  state       : 'Rupert',
  postCode    : '183922',
  country     : 'Achva',
  url         : 'www.acme.com',
  userId      : 'dummyUserId',
  designId    : 1
}


const getCardData = async (cardId: string): Promise<IVcard> => {
  const data = await fetch(`http://localhost:3000/api/card/${cardId}`)
  const cardData = await data.json()
  return cardData[0]
}

const UpdateCardDesign = ({ params } : { params: { userId: string, cardId: string} }) => {
  const router = useRouter()
  const [card, setCard] = useState<IVcard>()
  useEffect( () => {
    const initCardData = async () => {
      const data: IVcard = await getCardData(params.cardId || '')
      setCard(data)
    }
    
    initCardData()
  }, [])

  const onSubmit =  () => {
    fetch(`/api/card/${params.cardId}`, {
        body: JSON.stringify(card),
        method: "PUT", 
        headers: {
              "content-type": "application/json"
    }
    }).then( async (res) => {
            if (res.status !== 200) {
                alert("Error")
            } else {
                router.push(`/user`)
            }
    })
  }


  return (
    <div className="flex flex-col">
      <div onClick={() => onSubmit()} 
        className="fixed bg-blue-600 right-0 bottom-4 rounded-full text-white px-4 py-2 mr-6 hover:cursor-pointer">
        Save
      </div>
      <div className="container w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-2 px-4 py-4">
        { allDesigns.map((CardDesign, id) => {
          return (
            <button className={`p-2 sm:p-2 lg:p-8 ${id === card?.designId && "bg-yellow-100"}`} 
              key={id} onClick={ () => {
              const newData = { ...card, designId: id} as any
              setCard(newData)
            }} >
              <CardDesign data={card || dummyData}/>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default UpdateCardDesign

// http://localhost:3000/user/cljuy8o0k0000ka98wxzbnas7/cardDesign/cljv5q90s0001kae0u36oq080