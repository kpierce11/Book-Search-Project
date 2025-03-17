import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f50b5'
        },
        secondary: {
            main: '#9c27b0'
        },
        background: {
            default: '#000000',
            paper: '#1A1A1A'
        }
    },
});

export default theme