"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("./dto");
const status_enum_1 = require("./status.enum");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    async get(id) {
        if (!id) {
            throw new common_1.BadRequestException('id must be sent');
        }
        const user = await this._userRepository.findOne(id, {
            where: { status: status_enum_1.Status.ACTIVE },
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return class_transformer_1.plainToClass(dto_1.ReadUserDto, user);
    }
    async getAll() {
        const users = await this._userRepository.find({
            where: { status: status_enum_1.Status.ACTIVE },
        });
        return users.map((user) => class_transformer_1.plainToClass(dto_1.ReadUserDto, user));
    }
    async update(userId, user) {
        const foundUser = await this._userRepository.findOne(userId, {
            where: { status: status_enum_1.Status.ACTIVE },
        });
        if (!foundUser) {
            throw new common_1.NotFoundException('user does not exists');
        }
        foundUser.firstname = user.firstname;
        foundUser.lastname = user.lastname;
        foundUser.dateborn = user.dateborn;
        const updatedUser = await this._userRepository.save(foundUser);
        return class_transformer_1.plainToClass(dto_1.ReadUserDto, updatedUser);
    }
    async delete(id) {
        const userExists = await this._userRepository.findOne(id, {
            where: { status: status_enum_1.Status.ACTIVE },
        });
        if (!userExists) {
            throw new common_1.BadRequestException('id must be sent');
        }
        await this._userRepository.update(id, { status: status_enum_1.Status.INACTIVE });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map