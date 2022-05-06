"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hobbies_controller_1 = require("../controllers/hobbies.controller");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
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
 * '/hobbies/create/{_id}':
 *  post:
 *      tags:
 *      - Hobbies
 *      summary: Create a new hobbie for a specified user
 *      parameters:
 *       - name: _id
 *         in: path
 *         description: The id of the user
 *         required: true
 *         type: string
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserHobbieInput'
 *       responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/CreateUserHobbieResponse'
 *        400:
 *          description: Bad request
 *        500:
 *          description: Internal Server Error
 *
 */
router.post('/create/:_id', (0, express_validator_1.body)('name').isString().notEmpty(), (0, express_validator_1.body)('year').isInt().notEmpty(), (0, express_validator_1.body)('passionLevel').isString().notEmpty(), hobbies_controller_1.createUserHobbie);
router.get('/:_id', hobbies_controller_1.getUserHobbies);
router.delete('/:_id', hobbies_controller_1.deleteUserHobbie);
exports.default = router;
