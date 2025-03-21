import { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    
    // Basic validation
    if (!title || !author || !genre) {
      alert("Title, author, and genre are required.");
      return;
    }
    
    // Create new book object to be sent
    const newBook = { title, author, genre, description };
    console.log("Form submitted", newBook);
    // POST logic will be added in a future commit
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