"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../models/User");
const router = express_1.default.Router();
const users = [];
router.get('/user', (req, res) => {
    res.json(users);
});
router.post('/user', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User_1.User(users.length + 1, name, email, password);
    users.push(user);
    console.log(users);
    res.status(200).json(user);
});
exports.default = router;
