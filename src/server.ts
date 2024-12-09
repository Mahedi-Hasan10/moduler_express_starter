import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

dotenv.config();
const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
