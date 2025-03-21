import { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    
    // Basic validation
    if (!title || !author || !genre) {
      alert("Title, author, and genre are required.");
      return;
    }
    
    // Ensure genre is stored as an array (split by commas if multiple genres)
    const formattedGenre = genre.split(",").map(g => g.trim());
  
    // Create new book object
    const newBook = { title, author, genre: formattedGenre, description };
    
    // POST to server
    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    })
      .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('Book added successfully:', data);
        if (onAddBook) onAddBook(data);

        // Clear form fields
        setTitle('');
        setAuthor('');
        setGenre('');
        setDescription('');
        
        // Redirect back to home page
        navigate(`/books/${data.id}`);
      })
      .catch(err => {
        console.error("Failed to add book:", err);
        alert("Error: Could not add book. Please try again.");
      });
  };

  return (
    <Paper sx={{ maxWidth: '600px', margin: '2em auto', padding: '2em' }}>
      <Typography variant="h4" gutterBottom>Add New Book</Typography>
      
      <Box component="form" onSubmit={handleSubmit}>
        <TextField 
          label="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          fullWidth 
          margin="normal" 
          required
        />
        
        <TextField 
          label="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          fullWidth 
          margin="normal" 
          required
        />
        
        <TextField 
          label="Genre" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
          fullWidth 
          margin="normal" 
          required
        />
        
        <TextField 
          label="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          fullWidth 
          margin="normal" 
          multiline 
          rows={3}
        />
        
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          sx={{ mt: 2 }}
        >
          Add Book
        </Button>
      </Box>
    </Paper>
  );
}

export default AddBookForm;