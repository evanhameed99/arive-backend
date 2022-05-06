"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router.get('/', users_controller_1.getAllUsers);
router.post('/create', (0, express_validator_1.body)('name').isString().notEmpty(), users_controller_1.createUser);
exports.default = router;
