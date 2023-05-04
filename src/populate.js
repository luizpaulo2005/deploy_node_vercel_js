import { faker } from "@faker-js/faker";
import { prisma } from "./lib/prisma.js";

export const populate = async () => {
  var users = []
  for (let i = 0; i < 10; i++) {
    var user = faker.name.fullName();
    users.push({name: user})
  }

  try {
    await prisma.user.createMany({data: users})
    console.log('Users created')
  } catch (error) {
    console.log(error)
  }
};

populate()