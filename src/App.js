import { Home } from "./components/Home"
import './App.css';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./Theme";
import { Footer } from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Products } from "./components/products/Products";
import { Breadcrumbss } from "./components/Breadcrumbss";
import { ProductsInformation } from "./components/products/ProductsInformation";
import { ShoppingCart } from "./components/products/ShoppingCart";
import { Payment } from "./components/products/Payment";
import { useState } from "react";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { UserUpdate } from "./components/UserUpdate";
//boyutlarla alakali 45. videoya bak!!!
function App() {

    const [selectedShopping, setSelectedShopping] = useState(0);

    const updateSelectedShopping = (value) => {
        setSelectedShopping(value);
    };
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <Navbar selectedShopping={selectedShopping} />
                    <Breadcrumbss />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/ProductsInformation" element={<ProductsInformation updateSelectedShopping={updateSelectedShopping} />} />
                        <Route path="/shoppingCart" element={<ShoppingCart />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/userUpdate" element={<UserUpdate />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
                {/* yukardaki signIn ve signUp daha sonra duzenlenerek asagi alinacak  */}
                {/* <SignUp/> */}
                {/* <SignIn/> */}
            </div>
        </ThemeProvider>
    );
}

export default App;
