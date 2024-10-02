"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateZod_1 = __importDefault(require("../../middleware/validateZod"));
const auth_zod_1 = require("./auth.zod");
const auth_1 = __importDefault(require("../../middleware/auth"));
const auth_constant_1 = require("./auth.constant");
const router = express_1.default.Router();
router.post('/register', (0, validateZod_1.default)(auth_zod_1.AuthZod.createUserZod), auth_controller_1.AuthController.createUser);
router.post('/login', auth_controller_1.AuthController.login);
router.get('/', (0, auth_1.default)(auth_constant_1.USER_ROLE.user, auth_constant_1.USER_ROLE.admin), auth_controller_1.AuthController.getUser);
exports.AuthRoutes = router;
