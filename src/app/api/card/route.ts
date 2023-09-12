import prisma  from '@/lib/prisma'
import { createVcard } from '@/lib/vcardFile'
import { IVcard } from '@/lib/types/interfaces'

// List all available cards
export async function GET(request: Request) {
    const cards = await prisma.cardInfo.findMany()

    return new Response(JSON.stringify(cards))
}

// Create new card 
export async function POST(request: Request) {
    const body: IVcard = await request.json()

    console.log("new post request", body)
    try {
        
        const newCard = await prisma.cardInfo.create({
            data: {
                userId: body.userId ,
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
                country: body.country,
                postCode: body.postCode,
                url: body.url
            }
        })

        const _ = createVcard(newCard.id, body)
        const ret = { data: newCard, error: null}
        return new Response(JSON.stringify(ret))
    } catch (error) {
        console.log(error)
        const ret = { data: null, error: error}
        return new Response(JSON.stringify(ret), { status: 500 })
    }   
}

