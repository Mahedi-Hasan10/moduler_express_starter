import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import exampleRoutes from './modules/example/example.routes';
import authRouter from './modules/auth/auth.routes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/examples', exampleRoutes);
app.use('/api/user', authRouter);
app.get('/', (req, res) => {
    res.status(200).send({
        error: false,
        msg: 'Welcome to mediservicecare',
    });
});
app.use((err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).send({
        error: true,
        message: 'Internal Server Error',
    });
});

export default app;
