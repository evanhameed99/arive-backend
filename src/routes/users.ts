import express from 'express';
import { getAllUsers, createUser } from '../controllers/users.controller';
import { body } from 'express-validator'

const router = express.Router();

router.get('/',   getAllUsers);
router.post('/create', body('name').isString().notEmpty() ,createUser);

export default router;