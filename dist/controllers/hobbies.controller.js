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
exports.deleteUserHobbie = exports.getUserHobbies = exports.createUserHobbie = void 0;
const hobbies_model_1 = __importDefault(require("../models/hobbies.model"));
const express_validator_1 = require("express-validator");
const user_model_1 = __importDefault(require("../models/user.model"));
const createUserHobbie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { _id } = req.params;
    const { name, passionLevel, year } = req.body;
    const hobbie = new hobbies_model_1.default({
        name,
        passionLevel,
        year,
        createdAt: Date.now(),
    });
    const hobbieResult = yield hobbie.save();
    const userResult = yield user_model_1.default.findByIdAndUpdate(_id, { $push: { "hobbies": hobbieResult._id } }, { new: true });
    return res.json({ hobbieResult });
});
exports.createUserHobbie = createUserHobbie;
const getUserHobbies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const user = yield user_model_1.default.findById(_id);
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }
    const hobbies = yield hobbies_model_1.default.find({ _id: { $in: user.hobbies } });
    console.log('hobbies', hobbies);
    return res.json({ hobbies });
});
exports.getUserHobbies = getUserHobbies;
const deleteUserHobbie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const { hobbieId } = req.body;
    const [user, hobbie] = yield Promise.all([user_model_1.default.findById(_id), hobbies_model_1.default.findById(hobbieId)]);
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }
    if (!hobbie) {
        return res.status(404).json({
            message: 'Hobbie not found'
        });
    }
    const userResult = yield user_model_1.default.findByIdAndUpdate(_id, { $pull: { "hobbies": hobbieId } }, { new: true });
    return res.json({ userResult });
});
exports.deleteUserHobbie = deleteUserHobbie;
