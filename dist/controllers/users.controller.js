"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find();
    return users;
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res, next) => {
    const user = new user_model_1.default(req.body);
    user.save()
        .then((res) => {
        res.json({ res });
    })
        .catch((err) => {
        res.status(500).send(err);
    });
};
exports.createUser = createUser;
