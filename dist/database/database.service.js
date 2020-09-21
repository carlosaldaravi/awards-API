"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_keys_1 = require("../config/config.keys");
const config_module_1 = require("../config/config.module");
const config_service_1 = require("../config/config.service");
exports.databaseProviders = [
    typeorm_1.TypeOrmModule.forRootAsync({
        imports: [config_module_1.ConfigModule],
        inject: [config_service_1.ConfigService],
        async useFactory(config) {
            return {
                type: 'postgres',
                host: config.get(config_keys_1.Configuration.HOST),
                port: 5555,
                username: config.get(config_keys_1.Configuration.USERNAME),
                password: config.get(config_keys_1.Configuration.PASSWORD),
                database: config.get(config_keys_1.Configuration.DATABASE),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            };
        },
    }),
];
//# sourceMappingURL=database.service.js.map