import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const sendOtpValidator = z.object({
    body: z.object({
        action: z.string().min(1, "Action is required"),
        email: z.string().email("Invalid email address"),
    }),
});

export const validateSendOtp = (req: Request, res: Response, next: NextFunction) => {
    try {
        sendOtpValidator.parse({ body: req.body });
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        next(error);
    }
};
