"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.serverError = exports.created = exports.badRequest = void 0;
const badRequest = (body) => ({
    statusCode: 400,
    body,
});
exports.badRequest = badRequest;
const created = (body) => ({
    statusCode: 201,
    body,
});
exports.created = created;
const serverError = () => ({
    statusCode: 500,
    body: {
        message: "Erro interno no servidor",
    },
});
exports.serverError = serverError;
const ok = (body) => ({
    statusCode: 200,
    body,
});
exports.ok = ok;
