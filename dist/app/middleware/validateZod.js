"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// make folder wise higher order function so that code can organize
const validationZod = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body
            });
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.default = validationZod;
