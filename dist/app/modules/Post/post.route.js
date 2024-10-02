"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoute = void 0;
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const auth_constant_1 = require("../Auth/auth.constant");
const router = express_1.default.Router();
router.post('/createPost', (0, auth_1.default)(auth_constant_1.USER_ROLE.user), post_controller_1.PostController.createPostUser);
router.get('/', (0, auth_1.default)(auth_constant_1.USER_ROLE.user), post_controller_1.PostController.getUserPost);
router.put('/updatePost/:id', post_controller_1.PostController.updateUserPost);
router.delete('/deletePost/:id', post_controller_1.PostController.deleteUserPost);
exports.PostRoute = router;
