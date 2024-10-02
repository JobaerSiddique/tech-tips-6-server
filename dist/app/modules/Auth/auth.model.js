"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const AuthSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ["active", "blocked"],
        default: "active"
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
AuthSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt_1.default.hash(user.password, Number(config_1.default.bcrypt_salt_rounds));
    next();
});
AuthSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
exports.User = (0, mongoose_1.model)('User', AuthSchema);
