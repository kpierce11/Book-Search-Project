import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

function BookDetail({ books }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookId = parseInt(id, 10);
  
  return (
    <Box sx={{ padding: '1em' }}>
      <Typography variant="h4" gutterBottom>Book Details for ID: {bookId}</Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>
    </Box>
  );
}

export default BookDetail;