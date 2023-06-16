import { Button, HighlightedText } from '../StyledComponents';
import './UserInterface.scss';

export default function UserInterface() {
  return (
    <div className="interface-wrapper">
      <nav className="navigation-wrapper">
        <div className="logo-wrapper">
          <img src="src/assets/logo.png" />
        </div>
        <div className="nav-items-wrapper">
          <ul className="nav-items">
            <li>Features</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="signup-btn-wrapper">
          <Button>Get Started</Button>
        </div>
      </nav>
      <main className="section">
        <div className="content-wrapper">
          <h1>
            We make it simple to choose
            <HighlightedText> colors </HighlightedText>for your website
          </h1>
          <p>
            Let’s embody your beautiful ideas together, simplify the way you
            visualize your palette even before designing your next app idea.
          </p>
          <div className="email-input-wrapper">
            <input placeholder='Enter your email address' />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
        <div className="image-wrapper">
          <div className="image-inner-wrapper">
            <img src="https://placehold.co/600x1040" />
          </div>
        </div>
      </main>
    </div>
  );
}
