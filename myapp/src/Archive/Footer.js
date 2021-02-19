import "../styles/footer.styles.scss";
import boatImage from '../assets/logo.PNG';

export const Footer = () => (
  <header>
    <nav className="navbar-container">
      <div className="link-container link-container__left">
        <a href="https://twitter.com/frc2046?lang=en">Twitter</a>
        <a href="https://www.instagram.com/bearmetal2046/?hl=en">Instagram</a>
        <a href="https://www.facebook.com/FRC2046/">Facebook</a>
      </div>
      <img src={boatImage} className="logo" alt="logo" width={100} />
      <div className="link-container link-container__right">
        <a href="https://twitter.com/frc2046?lang=en">Twitter</a>
        <a href="https://www.instagram.com/bearmetal2046/?hl=en">Instagram</a>
        <a href="https://www.facebook.com/FRC2046/">Facebook</a>
      </div>
    </nav>
  </header>
)
