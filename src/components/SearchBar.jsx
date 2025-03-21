import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchBar({ query, onQueryChange }) {
  return (
    <Box sx={{ margin: '1em 0', maxWidth: '100%' }}>
      <TextField 
        variant="outlined" 
        label="Search books" 
        placeholder="Title, author, or genre..." 
        value={query} 
        onChange={(e) => onQueryChange(e.target.value)}
        fullWidth 
      />
    </Box>
  );
}

export default SearchBar;