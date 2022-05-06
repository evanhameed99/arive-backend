"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
}, {
    collection: 'hobbies'
});
const Hobbie = mongoose_1.default.model('Hobbie', hobbieSchema);
exports.default = Hobbie;
