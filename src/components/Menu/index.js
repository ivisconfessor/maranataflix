import React from 'react';
import { Link } from  'react-router-dom';
import Logo from '../../assets/img/LogoMaranataFlix.png';
import './Menu.css';
import  Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu"> 
            <a to="/">
                <img className="Logo" src={Logo} alt="Logo MaranataFlix" />
            </a>

            <Button as={Link} className="ButtonLink" to="/SobreNos">
                Sobre Nós
            </Button>
        </nav>
    )
}

export default Menu;