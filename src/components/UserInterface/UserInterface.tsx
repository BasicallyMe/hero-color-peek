import Button from './Button';
import './UserInterface.scss';

export default function UserInterface() {
    return (
        <div className="interface-wrapper">
            <nav className='navigation-wrapper'>
                <div className="logo-wrapper">
                    <img src='src/assets/logo.png' />
                </div>
                <div className="nav-items-wrapper">
                    <ul className='nav-items'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="signup-btn-wrapper">
                    <Button>Get Started</Button>
                </div>
            </nav>
        </div>
    )
}