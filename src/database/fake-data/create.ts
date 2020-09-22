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
    }
  } catch (error) {
    console.log("Error setting default values", error);
  }
};
