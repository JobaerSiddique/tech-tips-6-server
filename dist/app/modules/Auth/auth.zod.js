"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthZod = void 0;
const zod_1 = require("zod");
const createUserZod = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ message: "Name must be required" }),
        email: zod_1.z.string().email({ message: "Invalid email" }),
        password: zod_1.z.string(),
        phone: zod_1.z.string({ message: "Invalid phone number" })
    })
});
exports.AuthZod = {
    createUserZod
};
