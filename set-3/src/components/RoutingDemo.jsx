import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Simple Page Components
const Home = () => <div style={{ padding: '20px' }}><h3>🏠 Welcome Home</h3></div>;
const About = () => <div style={{ padding: '20px' }}><h3>📖 About Us Page</h3></div>;
const Contact = () => <div style={{ padding: '20px' }}><h3>📞 Contact Details</h3></div>;

export default function RoutingDemo() {
  return (
    <Router>
      <div style={{ border: '1px solid blue', padding: '20px' }}>
        <h2>Navigation Menu</h2>
        <nav>
          {/* Link is used instead of <a href> to prevent page reload */}
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}