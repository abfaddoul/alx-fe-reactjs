import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#282c34',
        justifyContent: 'space-around',
        background: '#333',
        padding: '10px',
        display: 'flex',
        gap: '20px',
      }}
    >
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
        Home
      </Link>
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">
        About
      </Link>
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/services">
        Services
      </Link>
      <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
