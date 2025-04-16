import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  return (
    <List>
      {books.length === 0 ? (
        <ListItem>
          <ListItemText primary="No books found" />
        </ListItem>
      ) : (
        books.map(book => (
          <ListItem 
            key={book.id} 
            component={Link} 
            to={`/books/${book.id}`} 
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0.08)' 
              }
            }}
          >
            <ListItemText 
              primary={book.title} 
              secondary={`${book.author} — ${book.genre.join(', ')}`}
            />
          </ListItem>
        ))
      )}
    </List>
  );
}

export default BookList;