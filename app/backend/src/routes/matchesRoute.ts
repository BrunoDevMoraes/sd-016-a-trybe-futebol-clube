import { Router } from 'express';
import CheckAuth from '../middlewares/checkAuth';
import MatchesController from '../controllers/matchesController';

const router = Router();

router.get('/matches', MatchesController.getAll);

router.post('/matches', CheckAuth.jwtValidator, MatchesController.createMatch);

router.patch('/matches/:id/finish', MatchesController.changeMatchStatus);

export default router;