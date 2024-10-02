"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/Auth/auth.route");
const post_route_1 = require("../modules/Post/post.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/user',
        route: auth_route_1.AuthRoutes
    },
    {
        path: '/post',
        route: post_route_1.PostRoute
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
