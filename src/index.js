import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import Backstory from "./pages/about/backstory";
import Crew from "./pages/about/crew";
import Press from "./pages/about/press";
import Process from "./pages/about/process";

import CocktailsAll from "./pages/cocktails/all";
import CocktailsBourbon from "./pages/cocktails/bourbon";
import CocktailsRye from "./pages/cocktails/rye";

import Whisky from "./pages/shop/whisky";
import StoreLocator from "./pages/shop/storeLocator";
import Merchandise from "./pages/shop/merch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/backstory" element={<Backstory />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/press" element={<Press />} />
      <Route path="/process" element={<Process />} />

      <Route path="/cocktailsAll" element={<CocktailsAll />} />
      <Route path="/cocktailsBourbon" element={<CocktailsBourbon />} />
      <Route path="/cocktailsRye" element={<CocktailsRye />} />

      <Route path="/whisky" element={<Whisky />} />
      <Route path="/store-locator" element={<StoreLocator />} />
      <Route path="/merchandise" element={<Merchandise />} />
    </Routes>
  </Router>
);
