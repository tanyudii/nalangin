import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://homestead:homestead@cluster0.7mcga.mongodb.net/walletDatabase")],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
