import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test/>} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
