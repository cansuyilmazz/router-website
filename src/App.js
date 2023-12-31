import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import Contact from "./pages/Contact";
import Paths from "./pages/Paths";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Fullstack from "./pages/Fullstack";
import Aws from "./pages/Aws";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/paths" element={<Paths />}>
          <Route path="" element={<Fullstack />} />
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
