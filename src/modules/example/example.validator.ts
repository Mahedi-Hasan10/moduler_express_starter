import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const exampleValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const ExampleSchema = z.object({
        name: z.string().min(1, { message: "Name is required" }),
        age: z.number().min(18, { message: "Age must be at least 18" }),
    });
    try {
        ExampleSchema.parse(req.body);  // Validate the body
        next();  // If valid, pass control to the next middleware or route handler
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: error.errors });
        } else {
            next(error);  // Pass other errors to the default error handler
        }
    }
};