import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import CategoriaList from "./pages/categorias/CategoriaList";
import ProductoList from "./pages/productos/ProductoList";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <div className="container mt-4">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route
                        path="/categorias"
                        element={<CategoriaList />}
                    />

                    <Route
                        path="/productos"
                        element={<ProductoList />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Routes>

            </div>

            <Footer />

        </BrowserRouter>
    );
}

export default App;