import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import App from "./App"
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Usuario from "./components/Usuario";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/" >
                    <Route index element={<Home />} />
                    <Route element={<Sobre />} path="/sobre" />
                    <Route element={<Usuario />} path="/usuario" />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                                <Link to="/">Got to Login or initial page</Link>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;