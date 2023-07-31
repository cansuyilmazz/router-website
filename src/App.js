import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Contact from "./pages/Contact";
import Paths from "./pages/Paths";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/paths" element={<Paths />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
