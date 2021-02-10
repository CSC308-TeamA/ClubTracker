import "../styles/footer.styles.scss";
import boatImage from '../assets/logo.PNG';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <header>
    <nav className="navbar-container">
      <div className="link-container link-container__left">
      <Link to="/about">About</Link>
      <Link to="/recources">Resources</Link>
      <Link to="/sponsor">Sponsor</Link>
      </div>
      <img src={boatImage} className="logo" alt="logo" width={100} />
      <div className="link-container link-container__right">
      <Link to="/sponsor">Sponsor</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </nav>
  </header>
)
