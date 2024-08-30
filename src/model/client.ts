import mongoose, {Schema, Document} from "mongoose";

export interface Client extends Document {
    name: string;
    email: string;
    message: string;
    date: Date;
}

const clientSchema = new Schema<Client>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

export const ClientModel = ( mongoose.models.clients as mongoose.Model<Client> ) || mongoose.model<Client>("clients", clientSchema)

