
import mongoose from "mongoose";
import { IUserDocument } from "../interfaces/users/users";
const Schema = mongoose.Schema;

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
},
    {
        collection: 'users'
    }
);

const User = mongoose.model<IUserDocument>('User', userShema);

export default User;