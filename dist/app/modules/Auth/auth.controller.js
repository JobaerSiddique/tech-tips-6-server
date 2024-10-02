"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const auth_service_1 = require("./auth.service");
const createUser = (0, catchAsync_1.default)(async (req, res) => {
    const addUser = req.body;
    const result = await auth_service_1.AuthService.createUserDB(addUser);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created successfully',
        data: result
    });
});
const login = (0, catchAsync_1.default)(async (req, res) => {
    const logindata = req.body;
    const result = await auth_service_1.AuthService.loginDB(logindata);
    const { accessToken, refreshToken } = result;
    res.cookie('refreshToken', refreshToken);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Logged in successfully',
        data: accessToken
    });
});
const getUser = (0, catchAsync_1.default)(async (req, res) => {
    const { userId, role } = req.user;
    const result = await auth_service_1.AuthService.getUserDB(userId, role);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User fetched successfully',
        data: result
    });
});
exports.AuthController = {
    createUser,
    login,
    getUser
};
