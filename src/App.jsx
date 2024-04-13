import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App