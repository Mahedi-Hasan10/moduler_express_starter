import { Request, Response } from 'express';
import { Example } from './example.model';

// Get all examples
export const getExamples = async (req: Request, res: Response): Promise<void> => {
    try {
        const examples = await Example.find();
        res.status(200).send({
            error: false,
            msg: "Successfully fethed examples",
            data: examples
        })
    } catch (error: any) {
        res.status(500).send({
            error: true,
            msg: "Server failed"
        });
    }
};

// Create a new example
export const createExample = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email } = req.body;
        const example = new Example({ name, email });
        const savedExample = await example.save();
        res.status(201).send({
            error: false,
            msg: "Example created successfully",
            data: savedExample
        });
    } catch (error: any) {
        res.status(500).send({
            error: true,
            msg: "Server failed"
        });
    }
};
