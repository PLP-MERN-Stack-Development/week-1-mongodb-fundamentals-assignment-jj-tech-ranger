MongoDB School Database Setup & Queries
This guide provides quick steps to set up a schoolDB database in MongoDB, populate it with book data, and run essential queries, aggregations, and indexing commands using the mongosh shell.

Prerequisites
MongoDB Community Server: Download & Install

MongoDB Shell (mongosh): Download & Install

Getting Started
1. Start the MongoDB Server
Open your terminal/command prompt and run the appropriate command:

Windows:

"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe" --dbpath "C:\data\db"

macOS/Linux:

mongod --dbpath /data/db

(You may need sudo or to create the /data/db directory.)

2. Connect to the MongoDB Shell
Open a new terminal/command prompt and connect:

mongosh

Database Setup & Data Insertion
1. Switch to schoolDB
use schoolDB;

2. Insert Book Data
Copy and paste the entire db.books.insertMany() command into your mongosh prompt:

db.books.insertMany([
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Dystopian',
    published_year: 2008,
    price: 11.50,
    in_stock: true,
    pages: 374,
    publisher: 'Scholastic Corporation'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    genre: 'Crime Thriller',
    published_year: 2005,
    price: 13.00,
    in_stock: true,
    pages: 464,
    publisher: 'Norstedts Förlag'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Post-Apocalyptic',
    published_year: 2006,
    price: 10.99,
    in_stock: true,
    pages: 287,
    publisher: 'Alfred A. Knopf'
  },
  {
    title: 'Life of Pi',
    author: 'Yann Martel',
    genre: 'Adventure',
    published_year: 2001,
    price: 12.00,
    in_stock: true,
    pages: 319,
    publisher: 'Knopf Canada'
  },
  {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    genre: 'Historical Fiction',
    published_year: 2003,
    price: 14.50,
    in_stock: true,
    pages: 371,
    publisher: 'Riverhead Books'
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Thriller',
    published_year: 2012,
    price: 10.50,
    in_stock: true,
    pages: 415,
    publisher: 'Crown Publishing Group'
  },
  {
    title: 'The Help',
    author: 'Kathryn Stockett',
    genre: 'Historical Fiction',
    published_year: 2009,
    price: 11.25,
    in_stock: true,
    pages: 464,
    publisher: 'Amy Einhorn Books'
  },
  {
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    genre: 'Historical Fiction',
    published_year: 2007,
    price: 13.50,
    in_stock: true,
    pages: 372,
    publisher: 'Riverhead Books'
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    published_year: 2011,
    price: 9.75,
    in_stock: true,
    pages: 369,
    publisher: 'Crown Publishing Group'
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Mystery',
    published_year: 2018,
    price: 15.99,
    in_stock: true,
    pages: 384,
    publisher: 'G.P. Putnam\'s Sons'
  }
]);

Running Queries & Aggregations
Copy and paste these commands into your mongosh prompt to interact with your data.

Basic Queries
Find books by genre:

db.books.find({ genre: 'Fiction' });

Find books published after 2000 (title, author, price only):

db.books.find({ published_year: { $gt: 2000 } }, { title: 1, author: 1, price: 1, _id: 0 });

Update a book's price:

db.books.updateOne({ title: 'The Alchemist' }, { $set: { price: 11.99 } });

Delete a book:

db.books.deleteOne({ title: 'Moby Dick' });

Aggregation Pipelines
Average price by genre:

db.books.aggregate([
  { $group: { _id: "$genre", average_price: { $avg: "$price" } } },
  { $sort: { average_price: -1 } }
]);

Author with most books:

db.books.aggregate([
  { $group: { _id: "$author", book_count: { $sum: 1 } } },
  { $sort: { book_count: -1 } },
  { $limit: 1 }
]);

Indexing & Performance
Indexes speed up queries. Use explain() to see their impact.

1. Create Indexes
db.books.createIndex({ title: 1 }); // For faster title searches
db.books.createIndex({ author: 1, published_year: -1 }); // For author and year searches

2. Demonstrate Performance with explain()
Run these queries after creating the indexes. Look for "stage" : "IXSCAN" (index scan - good!) instead of "stage" : "COLLSCAN" (collection scan - slow!).

Explain title search:

db.books.find({ title: 'The Martian' }).explain('executionStats');

Explain author and published_year search:

db.books.find({ author: 'Khaled Hosseini', published_year: { $gt: 2005 } }).explain('executionStats');

