import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import DetallePage from "./pages/detalle/DetallePage";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-products" element={<ProductsPage />} />
            <Route path="/detalle-product/:id" element={<DetallePage />} />
        </Routes>
    );
}