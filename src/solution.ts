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

function filterActiveUsers(
  users: { name: string; email: string; isActive: boolean }[]
): { name: string; email: string; isActive: boolean }[] {
  return users.filter(user => user.isActive === true);
}

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

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (value !== undefined && result.indexOf(value) === -1) {
      result.push(value);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (value !== undefined && result.indexOf(value) === -1) {
      result.push(value);
    }
  }

  return result;
}

function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  if (products.length === 0) {
    return 0;
  }

  return products.reduce((total, product) => {
    const ProductPrice = product.price * product.quantity;

    const discount = product.discount
      ? ProductPrice * (1 - product.discount / 100)
      : ProductPrice;

    return total + discount;
  }, 0);
}
