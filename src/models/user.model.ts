
import mongoose from "mongoose";
import { IUserDocument } from "../interfaces/users/users";
const Schema = mongoose.Schema;


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