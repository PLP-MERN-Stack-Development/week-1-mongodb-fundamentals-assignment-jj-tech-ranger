//TASK 2
//To find all books in a specific genre

db.books.find({ genre : 'Fiction'})

//To find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

//To find books by a specific author
db.books.find({ author: 'George Orwell' });

//To update the price of a specific book
db.books.updateOne(
  { title: 'The Alchemist' },
  { $set: { price: 11.99 } }
);

//To delete a book by it title
db.books.deleteOne({ title: 'Moby Dick' });

//TASK 3
// To Find books that are both in stock and published after 2010

db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 2010 }
  },
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
);

//To Implement Sorting by Price with Projection
db.books.find(
  {},
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
).sort({ price: 1 });  // 1 for ascending order -1 for descending order

//To Implement Pagination (5 books per page) with Projection and Sorting
//For the first five books
db.books.find(
  {},
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
)
.sort({ title: 1 })
.skip(0)
.limit(5);

//For the next five books
db.books.find(
  {},
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
)
.sort({ title: 1 })
.skip(5)
.limit(5);

//TASK 4
//To Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre", // Group by the 'genre' field
      average_price: { $avg: "$price" } // Calculate the average of 'price' for each group
    }
  },
  {
    $sort: { average_price: -1 } // Sort the results by average price in descending order
  }
]);

// To find the author with most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author", // Group by the 'author' field
      book_count: { $sum: 1 } // Count the number of books for each author
    }
  },
  {
    $sort: { book_count: -1 } // Sort by 'book_count' in descending order
  },
  {
    $limit: 1 // Limit the result to the top author
  }
]);

// To  Group books by publication decade and count them
db.books.aggregate([
  {
    $addFields: {
      // Calculate the decade: floor(year / 10) * 10
      publication_decade: {
        $multiply: [
          { $floor: { $divide: ["$published_year", 10] } },
          10
        ]
      }
    }
  },
  {
    $group: {
      _id: "$publication_decade", // Group by the calculated 'publication_decade'
      book_count: { $sum: 1 } // Count the number of books in each decade
    }
  },
  {
    $sort: { _id: 1 }Sort the results by decade in ascending order
  }
]);

//TASK 5
// To Create a single-field index on the title field
db.books.createIndex({ title: 1 }); // 1 for ascending order

// To Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 }); // author ascending, published_year descending

// To  Use explain() to demonstrate performance improvement

    // This command will show the execution plan for finding 'The Martian'.
    // If no index on 'title' exists, you'd see 'stage: "COLLSCAN"'.
    // This indicates MongoDB had to scan the entire collection.
    db.books.find({ title: 'The Martian' }).explain('executionStats');

    // Create an ascending index on the 'title' field.
    // This optimizes queries that filter or sort by title.
    db.books.createIndex({ title: 1 });

    // After creating the index on 'title', this query should now use the index.
    // You'll see 'stage: "IXSCAN"', indicating efficient index usage.
    db.books.find({ title: 'The Martian' }).explain('executionStats');


