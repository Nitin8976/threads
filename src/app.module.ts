import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderItemModule } from './modules/order-item/order-item.module';

@Module({
  imports: [ProductsModule, OrdersModule, CustomersModule, CategoryModule, OrderItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
