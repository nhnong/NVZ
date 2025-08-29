// app/api/books/route.ts
import { NextResponse } from 'next/server';

let books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: '1984', author: 'George Orwell' },
];

// Handle GET /api/books
export async function GET() {
  return NextResponse.json(books);
}

// Handle POST /api/books
export async function POST(request: Request) {
  const body = await request.json();
  const newBook = {
    id: books.length + 1,
    ...body,
  };
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}
