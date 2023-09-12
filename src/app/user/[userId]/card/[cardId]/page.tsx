"use client"
import CardDetail from '@/components/CardDetails/cardDetail'

const NewCardPage = ({ params } : { params: { userId: string, cardId: string}}) => {
      return <CardDetail userId={params.userId} cardId={params.cardId} />
}


export default NewCardPage