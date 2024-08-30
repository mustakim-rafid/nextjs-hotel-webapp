import mongoose from "mongoose";

type connectionFlag = {
    isConnected?: number
}

const flag: connectionFlag = {}

export async function dbConnect(){
    if (flag.isConnected) {
        console.log("Already connected to db")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

        flag.isConnected = db.connections[0].readyState

        console.log("DB connected successfully")
        
    } catch (error) {
        console.error("Error connecting to Mongodb ", error)
        process.exit(1)
    }
} 