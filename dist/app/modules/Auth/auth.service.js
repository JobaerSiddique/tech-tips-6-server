"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../Error/AppError"));
const auth_utils_1 = require("./auth.utils");
const config_1 = __importDefault(require("../../../config"));
const auth_model_1 = require("./auth.model");
const createUserDB = async (payload) => {
    const existUser = await auth_model_1.User.findOne({ email: payload.email });
    if (existUser) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "User already exists");
    }
    const newUser = await auth_model_1.User.create(payload);
    return newUser;
};
const loginDB = async (payload) => {
    const user = await auth_model_1.User.findOne({ email: payload.email });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    if (user.isDeleted) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "User is deleted");
    }
    if (user.status === 'blocked') {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "User is blocked");
    }
    const matchPassword = await bcrypt_1.default.compare(payload.password, user.password);
    if (!matchPassword) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid credentials");
    }
    const JwtPayload = {
        userId: user?._id.toString(),
        role: user?.role
    };
    const accessToken = (0, auth_utils_1.createToken)(JwtPayload, config_1.default.JWT_ACCESS_TOKEN, config_1.default.JWT_ACCESS_EXPIRE);
    const refreshToken = (0, auth_utils_1.createToken)(JwtPayload, config_1.default.JWT_REFRESH_TOKEN, config_1.default.JWT_REFRESH_EXPIRE);
    return { accessToken, refreshToken };
};
const getUserDB = async (userId, role) => {
    let result = null;
    if (role) {
        result = await auth_model_1.User.findOne({ _id: userId });
    }
    return result;
};
exports.AuthService = {
    createUserDB,
    loginDB,
    getUserDB
};
