import { Router } from "express";
import { createExample, getExamples } from "./example.controller";
import { exampleValidationMiddleware } from "./example.validator";

const router: Router = Router();

router.get('/', getExamples);
router.post('/', exampleValidationMiddleware, createExample);

export default router;