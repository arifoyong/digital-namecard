"use client"
import React from 'react'
import CardDetail from '@/components/CardDetails/cardDetail'

const NewCardPage = ({ params } : { params: { userId: string }}) => {
      return <CardDetail userId={params.userId} />
}


export default NewCardPage