"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_connection_1 = __importDefault(require("./databases/mongo_connection"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.use(express_1.default.json());
mongo_connection_1.default.once('open', () => {
    console.log('Connected to database');
});
app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});
app.use('/users', users_1.default);
