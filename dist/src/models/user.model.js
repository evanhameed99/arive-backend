"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *          default: Jane Doe
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        hobbies:
 *          type: array
 *          items:
 *              type: string
 *        createdAt:
 *          type: string
 *    GetAllUsersResponse:
 *      type: object
 *      properties:
 *        result:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              _id:
 *                type: string
 *              hobbies:
 *                type: array
 *                items:
 *                    type: string
 *              createdAt:
 *                type: string
 */
const userShema = new Schema({
    name: {
        type: String,
        required: true
    },
    hobbies: {
        type: Object,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    collection: 'users'
});
const User = mongoose_1.default.model('User', userShema);
exports.default = User;
