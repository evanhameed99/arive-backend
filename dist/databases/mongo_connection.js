"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://evan:evan123456789@cluster0.akxqt.mongodb.net/usersDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        return console.error('Could not connect to mongoDb!', err);
    }
});
const mongoDB = mongoose_1.default.connection;
exports.default = mongoDB;
