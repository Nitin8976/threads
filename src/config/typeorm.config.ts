// typeorm.config.ts
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

export const TypeOrmConfig = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST') || 'junction.proxy.rlwy.net',
        port: +configService.get<number>('DB_PORT') || 35216,
        username: configService.get('DB_USERNAME') || 'root',
        password: configService.get('DB_PASSWORD') || 'tLYyqVNIhxkLMQOnXWItbveTZeDwQlBs',
        database: configService.get('DB_NAME') || 'railway',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: ["dist/database/migrations/*{.ts,.js}"],
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
        cli: {
            migrationDir: 'src/database/migrations'
        },
        synchronize: true,
    }),
    inject: [ConfigService],
});
