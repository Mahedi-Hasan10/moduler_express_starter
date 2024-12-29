import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const secret = process.env.SECRET

export const decodeToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1]
        res.locals.user = jwt.verify(token, secret)
        next()
        return
    } catch (err) {
        next()
    }
}