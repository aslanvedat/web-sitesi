import { Home } from "./components/Home"
import './App.css';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
//boyutlarla alakali 45. videoya bak!!!
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />

      </div>
    </ThemeProvider>
  );
}

export default App;
