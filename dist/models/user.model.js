"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
