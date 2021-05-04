import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserContyroller } from './controllers/UserController';

const router = Router();

const userController = new UserContyroller();
const surveysController = new SurveysController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };