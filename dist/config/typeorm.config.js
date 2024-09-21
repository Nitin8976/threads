"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
exports.TypeOrmConfig = typeorm_1.TypeOrmModule.forRootAsync({
    imports: [config_1.ConfigModule],
    useFactory: (configService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST') || 'junction.proxy.rlwy.net',
        port: +configService.get('DB_PORT') || 35216,
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
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=typeorm.config.js.map