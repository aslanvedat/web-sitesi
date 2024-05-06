
import { Home } from "./components/Home"
import './App.css';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import { Footer } from "./components/Footer";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import { Products } from "./components/Products";

//boyutlarla alakali 45. videoya bak!!!
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter  >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
