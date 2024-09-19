import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderItemModule } from './modules/order-item/order-item.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductsModule, OrdersModule, CustomersModule, CategoryModule, OrderItemModule,
    ConfigModule.forRoot(), // Import the ConfigModule to read environment variables
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
