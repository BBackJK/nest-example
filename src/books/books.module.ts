import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksServices } from './books.services';

@Module({
  controllers: [BooksController],
  providers: [BooksServices],
})
export class BooksModule {}
