import TextField from '@mui/material/TextField';

function SearchBar({ query, onQueryChange }) {
  return (
    <div style={{ margin: '1em 0' }}>
      <TextField 
        variant="outlined" 
        label="Search books" 
        placeholder="Title, author, or genre..." 
        value={query} 
        onChange={(e) => onQueryChange(e.target.value)}
        fullWidth 
      />
    </div>
  );
}

export default SearchBar;