import { dbConnect } from "@/lib/dbConnect";
import { ClientModel } from "@/model/client";

export async function POST(request: Request){
    await dbConnect()
    
    try {
        const { name, email, message } = await request.json()

        const date = new Date()
        
        const client = new ClientModel({
            name,
            email,
            message,
            date
        })

        await client.save()

        return Response.json({
            success: true,
            message: "Contact info sended successfully"
        })

    } catch (error) {
        console.error("Error sending contact info ", error)

        return Response.json({
            success: false,
            message: "Error sending contact info"
        })
    }
}