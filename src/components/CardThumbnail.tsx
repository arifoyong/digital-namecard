import React, {  ReactNode } from 'react'
import { IVcard } from '@/lib/types/interfaces'
import { allDesigns } from './CardDesign/AllDesign';

const CardThumbnail = ({ data } : { data: IVcard }): ReactNode => {
    const design = data.designId || 0
    const Card = allDesigns[design]

    return <Card data={data}/>
}

export default CardThumbnail