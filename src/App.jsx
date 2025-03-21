import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for testing
  const sampleBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { id: 2, title: "Learning JavaScript", author: "John Doe", genre: "Nonfiction" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
    { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { id: 5, title: "JavaScript: The Good Parts", author: "Douglas Crockford", genre: "Nonfiction" }
  ];
  
  // Filter books based on search query
  const filteredBooks = sampleBooks.filter(book => {
    const query = searchQuery.toLowerCase();
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query)
    );
  });
  
  // Sort filtered books alphabetically by title
  filteredBooks.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <BrowserRouter>
      <NavMenu />
      <div style={{ padding: '1em' }}>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
              <BookList books={filteredBooks} />
            </>
          } />
          <Route path="/books/:id" element={<BookDetail books={sampleBooks} />} />
          <Route path="/add" element={<h2>Add Book Form will go here</h2>} />

          <Route path="*" element={
            <Box sx={{ padding: '2em', textAlign: 'center' }}>
             <Typography variant="h4" gutterBottom>Page Not Found</Typography>
             <Typography variant="body1" paragraph>
                Sorry, the page you're looking for doesn't exist.
              </Typography>
              <Button 
               variant="contained" 
                color="primary" 
                component={Link} 
                to="/"
             >
               Return to Home
              </Button>
           </Box>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;