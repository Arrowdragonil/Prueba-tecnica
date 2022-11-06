import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Peliculas from "./pages/peliculas";
import Pelicula from "./pages/pelicula";
import NotFound from "./pages/404";
import Serie from "./pages/serie";
import Series from "./pages/series";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="Home" element={<Home />} /> */}
          <Route path="Peliculas" element={<Peliculas />} />
          <Route path="Peliculas/:id" element={<Pelicula />}/>
          <Route path="Series" element={<Series />} />
          <Route path="Series/:id" element={<Serie />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
