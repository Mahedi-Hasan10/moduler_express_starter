import mongoose, { Schema, Document } from 'mongoose';

export interface IExample extends Document {
    name: string;
    email: string;
}

const exampleSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);

export const Example = mongoose.model<IExample>('Example', exampleSchema);
