"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const post_service_1 = require("./post.service");
const createPostUser = (0, catchAsync_1.default)(async (req, res) => {
    const { userId } = req.user;
    const addPost = req.body;
    const result = await post_service_1.PostService.createPostDB(userId, addPost);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post created successfully',
        data: result
    });
});
const getUserPost = (0, catchAsync_1.default)(async (req, res) => {
    const { userId } = req.user;
    const result = await post_service_1.PostService.getUserPostDB(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post fetched successfully',
        data: result
    });
});
const updateUserPost = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const result = await post_service_1.PostService.updateUserPostDB(id, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post updated successfully',
        data: result
    });
});
const deleteUserPost = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await post_service_1.PostService.deleteUserPostDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Post deleted successfully',
        data: ""
    });
});
const upVoteUser = (0, catchAsync_1.default)(async (req, res) => {
});
exports.PostController = {
    createPostUser,
    getUserPost,
    updateUserPost,
    deleteUserPost,
    upVoteUser
};
