"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const auth_service_1 = require("./auth.service");
const createUser = (0, catchAsync_1.default)(async (req, res) => {
    const addUser = req.body;
    const result = await auth_service_1.AuthService.createUserDB(addUser);
    console.log(result);
});
exports.AuthController = {
    createUser
};
