import { CreateUserUseCase } from "../use-case/create-usecase";
import { ZodError } from "zod";
import { CreateUserSchema } from "../schemas/create-schema";
import { badRequest, created, serverError } from "./helpers/http";

export class CreateUserController {
  async execute(httpRequest: any) {
    try {
      const params = httpRequest.body;

      await CreateUserSchema.parseAsync(params);

      const createUserUseCase = new CreateUserUseCase();

      const createdUser = await createUserUseCase.execute(params);

      return created(createdUser);
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        return badRequest({ message: error.errors[0].message });
      }
      return serverError();
    }
  }
}
