"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const auth_model_1 = require("../Auth/auth.model");
const AppError_1 = __importDefault(require("../Error/AppError"));
const post_model_1 = require("./post.model");
const createPostDB = async (userId, payload) => {
    const user = await auth_model_1.User.findById(userId);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const newPost = await post_model_1.Post.create(payload);
    return newPost;
};
const getUserPostDB = async (userId) => {
    const userPost = await post_model_1.Post.find({ userId: userId }).populate("userId");
    if (!userPost) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No post found");
    }
    return userPost;
};
const updateUserPostDB = async (id, payload) => {
    const findPost = await post_model_1.Post.findById(id);
    if (!findPost) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Post not found");
    }
    if (findPost.isDeleted) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Post is deleted");
    }
    const updateInfo = await post_model_1.Post.findByIdAndUpdate(id, payload);
    return updateInfo;
};
const deleteUserPostDB = async (id) => {
    const post = await post_model_1.Post.findById(id);
    if (!post) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "There have no post to delete");
    }
    const deletePost = await post_model_1.Post.findByIdAndUpdate(id, { isDeleted: true });
    return deletePost;
};
exports.PostService = {
    createPostDB,
    getUserPostDB,
    updateUserPostDB,
    deleteUserPostDB
};
