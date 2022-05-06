import express from 'express';
import { getAllUsers, createUser } from '../controllers/users.controller';
import { body } from 'express-validator'

const router = express.Router();

router.get('/',   getAllUsers);

  /**
   * @openapi
   * '/users/create':
   *  post:
   *     tags:
   *     - User
   *     summary: Create a new user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      400:
   *        description: Bad request
   *      500:
   *        description: Internal Server Error
   */
router.post('/create', body('name').isString().notEmpty() ,createUser);

export default router;