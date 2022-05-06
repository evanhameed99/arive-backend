"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoID = void 0;
const mongoose_1 = require("mongoose");
class mongoID extends mongoose_1.Types.ObjectId {
}
exports.mongoID = mongoID;
