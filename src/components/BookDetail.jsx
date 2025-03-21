import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Box, Paper } from '@mui/material';

function BookDetail({ books }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookId = parseInt(id, 10);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return (
      <Box sx={{ padding: '1em' }}>
        <Typography variant="h6" color="error">Book not found.</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate(-1)}
          sx={{ mt: 2 }}
        >
          ← Back
        </Button>
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: '2em', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>{book.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>by {book.author}</Typography>
      <Typography variant="body1" paragraph><b>Genre:</b> {book.genre}</Typography>
      <Typography variant="body2" paragraph>
        {book.description || "No description available for this book."}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>
    </Paper>
  );
}

export default BookDetail;