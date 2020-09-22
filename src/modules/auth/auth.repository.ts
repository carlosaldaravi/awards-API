import { genSalt, hash } from "bcryptjs";
import { EntityRepository, Repository } from "typeorm";
import { RoleType } from "../user/roletype.enum";
import { User } from "../user/user.entity";
import { SignupDto } from "./dto";

@EntityRepository(User)
export class AuthRepository extends Repository<User> {}
