import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css"

function Home() {
  return <h1 className="page-title">Home Page</h1>;
}

function About() {
  return <h1 className="page-title">About Page</h1>;
}

function Contact() {
  return <h1 className="page-title">Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;