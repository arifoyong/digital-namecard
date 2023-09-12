import prisma  from "@/lib/prisma";

// Get All Card by User ID
export async function GET(request: Request, { params } : { params: {userId: string} }) {
    console.log("Request for user ID", params.userId)

    const card = await prisma.cardInfo.findMany({
        where: { userId: params.userId }
    })
    
    // const retData = {data: card, error: null}
    console.log("Data", card)
    return new Response(JSON.stringify(card))
}