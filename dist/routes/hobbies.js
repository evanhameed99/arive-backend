"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hobbies_controller_1 = require("../controllers/hobbies.controller");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router.post('/create/:_id', (0, express_validator_1.body)('name').isString().notEmpty(), (0, express_validator_1.body)('year').isInt().notEmpty(), (0, express_validator_1.body)('passionLevel').isString().notEmpty(), hobbies_controller_1.createUserHobbie);
router.get('/:_id', hobbies_controller_1.getUserHobbies);
router.delete('/:_id', hobbies_controller_1.deleteUserHobbie);
exports.default = router;
