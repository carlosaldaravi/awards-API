import { Module } from "@nestjs/common";
import { Configuration } from "./config/config.keys";
import { ConfigModule } from "./config/config.module";
import { ConfigService } from "./config/config.service";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AwardModule } from "./modules/award/award.module";

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, AuthModule, AwardModule],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
