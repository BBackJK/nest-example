import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    BooksModule,
    CustomerModule,
    MongooseModule.forRoot('mongodb://localhost/test', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
