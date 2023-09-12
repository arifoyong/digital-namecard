"use client"

import React from 'react'
import { IVcard } from '@/lib/types/interfaces'
import CardThumbnail from '@/components/CardThumbnail'

const getCardById = async (cardId: string): Promise<IVcard> => {
  const data = await fetch(`http://localhost:3000/api/card/${cardId}`)
  const card = await data.json()
  return card[0]
}

const CardPage = async ({ params } : { params: { cardId: string }}) => {
  const cardData = await getCardById(params.cardId)
  
  return (
    <div className="h-screen max-w-md mx-auto">
      <CardThumbnail data={cardData} />

      <div className="flex justify-center p-2 bg-yellow-100 rounded-lg text-gray-800 hover:cursor-pointer hover:text-blue-600">
            <a href={`http://localhost:3000/vcards/${cardData.id}.vcf`}>
                Download
            </a>
        </div>
    </div>

  )
}

export default CardPage