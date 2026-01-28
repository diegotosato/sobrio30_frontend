import LogoBlack from '../assets/logoBlack.png';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const scrollToContacts = (e) => {
        e.preventDefault();
        const contactsElement = document.getElementById('contacts');
        if (contactsElement) {
            contactsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <NavLink to="/">
                            <img src={LogoBlack} alt="logo_sobrio30" />
                        </NavLink>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reseller">Diventa rivenditore</NavLink>
                        </li>
                        <li>
                            <a href="#contacts" onClick={scrollToContacts}>Contatti</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}