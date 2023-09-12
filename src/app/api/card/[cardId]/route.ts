import prisma  from "@/lib/prisma";
import { createVcard, deleteVcard } from '@/lib/vcardFile'
import { IVcard } from "@/lib/types/interfaces";

// Get Card by ID
export async function GET(request: Request, { params } : { params: {cardId: string} }) {
    console.log("Request for user ID", params.cardId)

    const card = await prisma.cardInfo.findMany({
        where: { id: params.cardId }
    })
    
    // const retData = {data: card, error: null}
    console.log("Data", card) 
    return new Response(JSON.stringify(card))
}

// Update Card by ID
export async function PUT(request: Request,  { params } : { params: {cardId: string}}) {
    const body: IVcard = await request.json()

    console.log('Receive PUT request:', body)
    try {
        const updatedCard = await prisma.cardInfo.update({
            where: {
                id: params.cardId
            },
            data: {
                userId: body.userId,
                prefix: body.prefix,
                firstName: body.firstName,
                lastName: body.lastName,
                company: body.company,
                jobTitle: body.jobTitle,
                jobRole: body.jobRole,
                email: body.email,
                phoneNo: body.phoneNo,
                hpNo: body.hpNo,
                street: body.street,
                city: body.city,
                state: body.state,
                postCode: body.postCode,
                country: body.country,
                url: body.url,
                designId: body.designId
            }
        })

        const _ = createVcard(params.cardId, body)
        
        const retData = {data: updatedCard, error: null}
        return new Response(JSON.stringify(retData))
    } catch (error) {
        const retData = {data: null, error: error}
        return new Response(JSON.stringify(retData), { status: 500 })
    }
    
}

// Delete Card by ID
export async function DELETE(request: Request,  { params } : { params: {cardId: string}}) {
    try {
        const ret = await prisma.cardInfo.delete({
            where: {
                id: params.cardId
            }
        })
        
        const _ = deleteVcard(params.cardId)
        const retData = {data: `Card: ${params.cardId} was deleted`, error: null}
        return new Response(JSON.stringify(retData))
    } catch (error) {
        const retData = {data: null, error: error}
        return new Response(JSON.stringify(retData), { status: 500 })
    }
}   