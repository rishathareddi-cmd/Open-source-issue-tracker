import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>OpenSource Tracker</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/issues">Issue List</Link>
        <Link to="/create">Create Issue</Link>
      </div>
    </nav>
  );
}
