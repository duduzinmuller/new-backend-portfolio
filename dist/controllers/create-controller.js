"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const create_usecase_1 = require("../use-case/create-usecase");
const zod_1 = require("zod");
const create_schema_1 = require("../schemas/create-schema");
const http_1 = require("./helpers/http");
class CreateUserController {
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = httpRequest.body;
                yield create_schema_1.CreateUserSchema.parseAsync(params);
                const createUserUseCase = new create_usecase_1.CreateUserUseCase();
                const createdUser = yield createUserUseCase.execute(params);
                return (0, http_1.created)(createdUser);
            }
            catch (error) {
                console.error(error);
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({ message: error.errors[0].message });
                }
                return (0, http_1.serverError)();
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
