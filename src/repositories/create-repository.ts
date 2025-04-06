import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CreateUserProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message?: string;
}

export class CreateUserRepository {
  async execute(createUserParams: CreateUserProps) {
    const user = await prisma.user.create({
      data: {
        firstName: createUserParams.firstName,
        lastName: createUserParams.lastName,
        email: createUserParams.email,
        phoneNumber: createUserParams.phoneNumber,
        message: createUserParams.message,
      },
    });

    return user;
  }
}
