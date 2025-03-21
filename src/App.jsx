import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  
  // Fetch books data on initial load
  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setError(null);
      })
      .catch(err => {
        console.error("Failed to fetch books:", err);
        setError("Unable to load book data. Please try again later.");
      });
  }, []);  // run once on mount
  
  // Filter books based on search query
  const filteredBooks = books.filter(book => {
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
              {error ? (
                <p style={{ color: 'red' }}>{error}</p>
              ) : (
                <BookList books={filteredBooks} />
              )}
            </>
          } />
          <Route path="/books/:id" element={<BookDetail books={books} />} />
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