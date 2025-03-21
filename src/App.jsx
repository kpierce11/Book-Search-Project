import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for testing
  const sampleBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { id: 2, title: "Learning JavaScript", author: "John Doe", genre: "Nonfiction" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" }
  ];
  
  return (
    <BrowserRouter>
      <NavMenu />
      <div style={{ padding: '1em' }}>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
              <BookList books={sampleBooks} />
            </>
          } />
          <Route path="/books/:id" element={<h2>Book Detail will go here</h2>} />
          <Route path="/add" element={<h2>Add Book Form will go here</h2>} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;