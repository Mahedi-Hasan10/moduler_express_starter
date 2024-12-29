import { Response, Request } from "express";
import { User } from "./auth.model";

export const sendOtp = async (req: Request, res: Response) => {
    try {
        const { email, action } = req.body
        console.log("🚀 ~ sendOtp ~ email, action:", email, action)
        return res.status(200).send({
            error: false,
            msg: " OTP has sent to your email address",
            data: email
        })

    } catch (error) {
        return res.status(400).send({
            error: true,
            msg: "Internal Server Error"
        })
    }
}