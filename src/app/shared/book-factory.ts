import { BookRaw } from './book-raw';
import { Book } from './book';

export class BookFactory {
  static fromRaw(b: BookRaw): Book {
    return {
      ...b,
      published: new Date(b.published)
    };
  }
}
