import mongoose from "mongoose";
const Schema = mongoose.Schema;


const hobbieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    passionLevel: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    collection : 'hobbies'
}
);

const Hobbie = mongoose.model('Hobbie', hobbieSchema);

export default Hobbie;

