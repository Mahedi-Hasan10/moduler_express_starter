export const generateOtpEmailTemplate = (
    recipientName: string,
    otp: string,
    purpose: "Forgot Password" | "User Registration"
) => {
    const actionDescription =
        purpose === "Forgot Password"
            ? "to reset your password"
            : "to complete your registration";

    const additionalMessage =
        purpose === "Forgot Password"
            ? "If you didn’t request a password reset, you can safely ignore this email."
            : "If you didn’t register on our platform, please contact our support team.";

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${purpose} - OTP</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f6f6f6;
                margin: 0;
                padding: 0;
                color: #333;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .email-header {
                background-color: #007bff;
                color: #ffffff;
                text-align: center;
                padding: 20px;
            }
            .email-body {
                padding: 20px;
            }
            .email-footer {
                background-color: #f0f0f0;
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #666;
            }
            .otp-code {
                font-size: 24px;
                font-weight: bold;
                color: #007bff;
                text-align: center;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">
                <h1>${purpose} - One-Time Password (OTP)</h1>
            </div>
            <div class="email-body">
                <p>Dear ${recipientName},</p>
                <p>We have received a request ${actionDescription}. Please use the OTP below to proceed:</p>
                <div class="otp-code">${otp}</div>
                <p>${additionalMessage}</p>
                <p>If you have any questions or need assistance, please don’t hesitate to contact us.</p>
                <p>Best regards,<br>The [Your Company] Team</p>
            </div>
            <div class="email-footer">
                <p>&copy; 2024 [Your Company]. All rights reserved.</p>
                <p><a href="[Privacy Policy Link]">Privacy Policy</a> | <a href="[Contact Us Link]">Contact Us</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
};
