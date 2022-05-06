"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_connection_1 = __importDefault(require("./databases/mongo_connection"));
const users_1 = __importDefault(require("./routes/users"));
const hobbies_1 = __importDefault(require("./routes/hobbies"));
const swagger_1 = __importDefault(require("./utils/swagger"));
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
    (0, swagger_1.default)(app, port);
});
app.use(express_1.default.json());
mongo_connection_1.default.once('open', () => {
    console.log('Connected to database');
});
/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
app.get("/healthcheck", (req, res) => res.sendStatus(200));
app.use('/users', users_1.default);
app.use('/hobbies', hobbies_1.default);
