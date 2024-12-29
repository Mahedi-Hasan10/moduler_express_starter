import mongoose, { Schema } from "mongoose";
import { aggregatePaginate, paginate } from "../../utils/mongoose";
export interface IAuth extends Document {
    uid: string,
    name: string,
    phone: string,
    email: string,
    password: string,
    role: string,
    image: string,
    address: string,
    gender: string,
    dob: Date,
    about: string

}
const schema: Schema = new Schema({
    uid: {
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        index: true,
    },
    email: {
        type: String,
        index: true,
        lowercase: true,
    },
    password: String,
    role: {
        type: String,
        enum: ['user', 'trainer', 'admin', 'employee'],
        required: true,
    },
    image: String,
    address: String,
    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },
    dob: Date,
    about: String,

}, { timestamps: true })

schema.plugin(paginate)
schema.plugin(aggregatePaginate)
export const User = mongoose.model<IAuth>('user', schema)