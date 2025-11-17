function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  if (typeof value === 'boolean') {
    return !value;
  }

  return value;
}

function getLength(value: string | any[]): number {
  if (typeof value === 'string') {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name} Age: ${this.age}`;
  }
}

function filterByRating(items: { title: string; rating: number }[]): {
  title: string;
  rating: number;
}[] {
  return items.filter(item => item.rating >= 4);
}

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

function filterActiveUsers(
  users: { name: string; email: string; isActive: boolean }[]
): { name: string; email: string; isActive: boolean }[] {
  return users.filter(user => user.isActive === true);
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No';

  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);
  console.log(`Available: ${availability}`);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
