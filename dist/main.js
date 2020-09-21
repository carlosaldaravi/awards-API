"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    await app.listen(app_module_1.AppModule.port);
    console.log('Corriendo en el puerto ', app_module_1.AppModule.port);
}
bootstrap();
//# sourceMappingURL=main.js.map