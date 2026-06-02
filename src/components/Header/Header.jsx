import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2>Tropical</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Schedule</a>
        <a href="/">Membership</a>
        <a href="/">Pricing</a>
      </nav>
      <button>Explore</button>
    </header>
  );
}

export default Header;