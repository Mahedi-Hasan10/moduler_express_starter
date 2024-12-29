import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const otpValidator = (req: Request, res: Response, next: NextFunction) => {
    const otpSchema = z.object({
        email: z.string().min(1, { message: "Email is required" }),
        action: z.string().min(1, { message: "action is required" })
    })
    try {
        otpSchema.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ message: error.errors });
        } else {
            next(error);
        }
    }
}