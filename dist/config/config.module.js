"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const path = require("path");
const app_config_1 = require("./app.config");
const database_config_1 = require("../database/config/database.config");
const nestjs_i18n_1 = require("nestjs-i18n");
const typeorm_config_module_1 = require("../database/typeorm-config.module");
const loadConfig = [app_config_1.default, database_config_1.default];
const currentEnv = process.env.NODE_ENV || 'local';
console.info('Current Environment: ' + currentEnv);
let AppConfigModule = class AppConfigModule {
};
exports.AppConfigModule = AppConfigModule;
exports.AppConfigModule = AppConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_config_module_1.TypeOrmConfigModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: loadConfig,
                envFilePath: path.resolve(process.cwd(), 'env', `.env.${currentEnv}`),
            }),
            nestjs_i18n_1.I18nModule.forRootAsync({
                useFactory: (configService) => ({
                    fallbackLanguage: configService.getOrThrow('app.fallbackLanguage', {
                        infer: true,
                    }),
                    loaderOptions: {
                        path: path.join(__dirname, '../i18n/'),
                        watch: true
                    },
                }),
                resolvers: [
                    {
                        use: nestjs_i18n_1.HeaderResolver,
                        useFactory: (configService) => {
                            return [
                                configService.get('app.headerLanguage', {
                                    infer: true,
                                }),
                            ];
                        },
                        inject: [config_1.ConfigService],
                    },
                ],
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
            }),
        ]
    })
], AppConfigModule);
//# sourceMappingURL=config.module.js.map