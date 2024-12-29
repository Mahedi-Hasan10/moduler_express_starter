import mongoose, { Schema } from "mongoose";
export interface IOtp extends Document {
    action: string;
    email: string;
    otp: string;
}
let schema: Schema = new Schema({
    action: {
        type: String,
        required: true
    },
    email: String,
    otp: {
        type: String,
        required: true
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '2m' },
    },
}, { timestamps: true })

export const Otp = mongoose.model<IOtp>('otp', schema);
