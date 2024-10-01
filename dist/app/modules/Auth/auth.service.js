"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../Error/AppError"));
const auth_model_1 = require("./auth.model");
const createUserDB = async (payload) => {
    const existUser = await auth_model_1.Auth.findOne({ email: payload.email });
    if (existUser) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "User already exists");
    }
};
exports.AuthService = {
    createUserDB
};
