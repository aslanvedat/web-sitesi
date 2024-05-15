import { createTheme } from '@mui/material/styles';
import { green, lightBlue, purple, teal } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            // main: lightBlue[500]
            main: "#5c6bc0"
            // main: "#424242"
        }, secondary: {
            main: green[400]
        },
        color3: {
            main: "#a7ffeb"
        },
        grey: {
            main: "#212121"
        }
    }
});

export default theme;
