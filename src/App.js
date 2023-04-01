import Header from "./Components/Header";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client"

export default function App() {
  return (
    < >
     <BrowserRouter>
     <Header/>
      <Routes>

          <Route path="Home" element={<Home />}>
          <Route path="Product" element={<Product />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);