import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userShema = new Schema({
    name: {
        type: String,
        required: true
    },
    hobbies: {
        type: Object,
        default : []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    collection : 'users'
}
);

const User = mongoose.model('User', userShema);

export default User;


