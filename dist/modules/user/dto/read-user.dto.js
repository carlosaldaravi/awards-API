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
exports.ReadUserDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let ReadUserDto = class ReadUserDto {
};
__decorate([
    class_transformer_1.Expose(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ReadUserDto.prototype, "id", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], ReadUserDto.prototype, "email", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ReadUserDto.prototype, "firstname", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ReadUserDto.prototype, "lastname", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_validator_1.IsString(),
    __metadata("design:type", Date)
], ReadUserDto.prototype, "dateborn", void 0);
ReadUserDto = __decorate([
    class_transformer_1.Exclude()
], ReadUserDto);
exports.ReadUserDto = ReadUserDto;
//# sourceMappingURL=read-user.dto.js.map