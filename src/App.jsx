import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddBookForm from './components/AddBookForm';
import { Container } from '@mui/material';

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]); 
  };
  
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
  }, []);  
  
  // Filter books based on search query
  const filteredBooks = books.filter(book => {
    const query = searchQuery.toLowerCase();
    const regex = new RegExp(`\\b${query}`, "i"); 
  

    const genreMatches = book.genre.some(genre =>
      genre.toLowerCase().startsWith(query)
    );
  
    return (
      regex.test(book.title) ||  
      regex.test(book.author) || 
      genreMatches               
    );
  });
  
  
  // Sort filtered books alphabetically by title
  filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  
  return (
    <BrowserRouter>
      <NavMenu />
      <Container maxWidth="lg" sx={{ py: 2 }}>
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
          <Route path="/add" element={<AddBookForm onAddBook={handleAddBook} />} />
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
      </Container>
    </BrowserRouter>
  );
}

export default App;