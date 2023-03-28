import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="contanier">
        <div className="links">
          <img src="/icon/avatar.png" alt="" />
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#who">About</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <img src="/icon/search.png" alt="" />
          <button>Hire Now</button>
        </div>
      </div>
    </div>
  );
}
