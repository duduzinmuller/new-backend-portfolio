import {
  CreateUserProps,
  CreateUserRepository,
} from "../repositories/create-repository";
import { v4 as uuidv4 } from "uuid";

export class CreateUserUseCase {
  async execute(createUserParams: CreateUserProps) {
    const userId = uuidv4();

    const user = {
      id: userId,
      ...createUserParams,
    };

    const createUserRepository = new CreateUserRepository();

    const result = await createUserRepository.execute(user);

    return result;
  }
}
