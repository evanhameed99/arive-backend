"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const express_validator_1 = require("express-validator");
const getAllUsers = (req, res, next) => {
    user_model_1.default.find()
        .then(users => {
        res.json(users);
    })
        .catch(err => {
        return next(err);
    });
};
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = new user_model_1.default(req.body);
    user.save()
        .then((user) => {
        res.json({ user });
    })
        .catch((err) => {
        res.status(500).send(err);
    });
};
exports.createUser = createUser;
