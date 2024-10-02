"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const Auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        let token;
        if (req.headers.authorization && req.headers.authorization) {
            token = req.headers.authorization;
        }
        if (!token) {
            return res.status(http_status_1.default.UNAUTHORIZED).json({ success: false, message: 'UnAutorized user Token' });
        }
        // check vaild token 
        jsonwebtoken_1.default.verify(token, config_1.default.JWT_ACCESS_TOKEN, function (err, decoded) {
            if (err) {
                return res.status(http_status_1.default.UNAUTHORIZED).json({ success: false, message: 'UnAutorized user not Verify' });
            }
            const role = decoded.role;
            if (requiredRoles && !requiredRoles.includes(role)) {
                return res.status(http_status_1.default.UNAUTHORIZED).json({ success: false, message: 'You have no access to this route ' });
            }
            req.user = decoded;
            next();
        });
    });
};
exports.default = Auth;
