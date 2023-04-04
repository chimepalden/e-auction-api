import { Module } from '@nestjs/common';
import { BuyerController } from './buyer.controller';
import { ProductsModule } from '../products/products.module';
import { UsersModule } from '../users/users.module';
import { BidsModule } from '../bids/bids.module';

@Module({
  controllers: [BuyerController],
  providers: [],
  imports: [UsersModule, ProductsModule, BidsModule],
})
export class BuyerModule {}
