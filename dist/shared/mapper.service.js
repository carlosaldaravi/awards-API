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
exports.MapperService = void 0;
const common_1 = require("@nestjs/common");
const ts_mapper_1 = require("ts-mapper");
let MapperService = class MapperService extends ts_mapper_1.TypeMapper {
    constructor() {
        super();
        this.config();
    }
    config() {
        this.createMap()
            .map(entity => entity.id, dto => dto.id)
            .map(entity => entity.username, dto => dto.username)
            .map(entity => entity.firstname, dto => dto.firstname)
            .map(entity => entity.lastname, dto => dto.lastname)
            .map(entity => entity.email, dto => dto.email);
    }
};
MapperService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], MapperService);
exports.MapperService = MapperService;
//# sourceMappingURL=mapper.service.js.map