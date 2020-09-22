import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setDefaultValues } from "./database/fake-data/create";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  setDefaultValues();

  // CORS Config
  app.enableCors();

  await app.listen(AppModule.port);
  console.log("Corriendo en el puerto ", AppModule.port);
}
bootstrap();
