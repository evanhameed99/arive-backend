import express from 'express';
import { createUserHobbie , getUserHobbies , deleteUserHobbie } from '../controllers/hobbies.controller';
import { body  , param} from 'express-validator'

const router = express.Router();

router.post('/create/:_id',
 body('name').isString().notEmpty(),
 body('year').isInt().notEmpty(),
 body('passionLevel').isString().notEmpty(),
 createUserHobbie );

router.get('/:_id',
 getUserHobbies);

router.delete('/:_id',
 deleteUserHobbie);


export default router;