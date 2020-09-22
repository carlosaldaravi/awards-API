import { Logger } from "@nestjs/common";
import { Award } from "src/modules/award/award.entity";
import { User } from "src/modules/user/user.entity";
import { getConnection } from "typeorm";
import { awards_DB_DATA } from "./awards";
import { users_DB_DATA } from "./users";

// insert data base examples

export const setDefaultValues = async () => {
  const logger = new Logger("SetDefaultValues");

  try {
    if ((await Award.count()) == 0) {
      logger.log(`Adding awards...`);

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("awards")
        .values(awards_DB_DATA)
        .execute();
    }
    if ((await User.count()) == 0) {
      logger.log(`Adding users...`);

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into("users")
        .values(users_DB_DATA)
        .execute();
      const user1 = await User.findOne(1);
      const user2 = await User.findOne(2);
      const award1 = await Award.findOne(1);
      const award2 = await Award.findOne(2);
      logger.log(`Adding awards to user 1...`);
      await User.createQueryBuilder()
        .relation(User, "awards")
        .of(user1)
        .add([award1, award2]);
      logger.log(`Adding awards to user 2...`);
      await User.createQueryBuilder()
        .relation(User, "awards")
        .of(user2)
        .add([award1]);
    }
  } catch (error) {
    console.log("Error setting default values", error);
  }
};
