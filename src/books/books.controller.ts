import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { BooksServices } from './books.services';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksServices: BooksServices) {}

  @Get()
  async getBooks() {
    const books = await this.booksServices.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.booksServices.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksServices.addBook(createBookDTO);
    return book;
  }

  @Delete()
  async deleteBook(@Query() query) {
    const books = await this.booksServices.deleteBook(query.bookID);
    return books;
  }
}
