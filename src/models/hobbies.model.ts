import mongoose from "mongoose";
const Schema = mongoose.Schema;


/**
 * @openapi
 * components:
 *   schema:
 *     GetUserHubbies:
 *       type: object
 *       properties: 
 *         hobbies:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               _id:
 *                 type: string
 *               hobbies:
 *                 type: array
 *                 items: 
 *                   type: string
 *               createdAt:
 *                 type: string
 *     UserHobbieInput:
 *       type: object
 *       required:
 *         - hobbieId
 *       properties:
 *         hobbieId:
 *           type: string
 *     HobbieCreateInput:
 *       type: object
 *       required:
 *         - name
 *         - year
 *         - passionLevel
 *       properties:
 *         name:
 *           type: string
 *           default: kickboxing
 *         year:
 *           type: number
 *           default: 2020
 *         passionLevel:
 *           type: string
 *           default: Low
 *     DeleteHobbieResponse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         _id:
 *           type: string
 *         hobbies:
 *           type: array
 *           items: 
 *             type: string
 *         createdAt:
 *           type: string
 *     HobbieCreateResponse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           default: KickBoxing
 *         _id:
 *           type: string
 *         year:
 *           type: number
 *           default: 2020
 *         passionLevel:
 *           type: string
 *           default: Low
 *         createdAt:
 *           type: string
 */


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

