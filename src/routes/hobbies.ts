import express from 'express';
import { createUserHobbie, getUserHobbies, deleteUserHobbie } from '../controllers/hobbies.controller';
import { body, param } from 'express-validator'
const router = express.Router();


/**
* @openapi
* '/hobbies/{_id}':
*  get:
*     tags:
*     - Hobbies
*     summary: Get hubbies of a specified user
*     parameters:
*      - name: _id
*        in: path
*        description: The id of the user
*        required: true
*        type: string
*     responses:
*       200:
*         description: Success
*         content:
*          application/json:
*           schema:
*              $ref: '#/components/schema/GetUserHubbies'
*       404:
*         description: User not found
* 
* 
* '/hobbies/delete/{_id}':
*  delete:
*     tags:
*     - Hobbies
*     summary: Delete user hobbie
*     parameters:
*      - name: _id
*        in: path
*        description: The id of the user
*        required: true
*        type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*            schema:
*               $ref: '#/components/schema/UserHobbieInput'
*     responses:
*       200:
*         description: Success
*         content:
*          application/json:
*           schema:
*              $ref: '#/components/schema/DeleteHobbieResponse'
*       404:
*         description: User not found
* 
* '/hobbies/create/{_id}':
*  post:
*     tags:
*     - Hobbies
*     summary: Create user hobbie
*     parameters:
*      - name: _id
*        in: path
*        description: The id of the user
*        required: true
*        type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*            schema:
*               $ref: '#/components/schema/HobbieCreateInput'
*     responses:
*       200:
*         description: Success
*         content:
*          application/json:
*           schema:
*              $ref: '#/components/schema/HobbieCreateResponse'
*       404:
*         description: User not found
* 
* 
*/



router.post('/create/:_id',
    body('name').isString().notEmpty(),
    body('year').isInt().notEmpty(),
    body('passionLevel').isString().notEmpty(),
    createUserHobbie);

router.get('/:_id',
    getUserHobbies);

router.delete('/delete/:_id',
    deleteUserHobbie);


export default router;