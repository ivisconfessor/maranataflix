import React from 'react';
import { Link } from  'react-router-dom';
import Logo from '../../assets/img/LogoMaranataFlix.png';
import './Menu.css';
import  Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu"> 
<<<<<<< HEAD
            <a to="/">
                <img className="Logo" src={Logo} alt="Logo MaranataFlix" />
=======
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo IvisFlix" />
>>>>>>> 3db8bf3619cc556eb1a4a41ebfc52fb6c2ae4a2f
            </a>

            <Button as={Link} className="ButtonLink" to="/SobreNos">
                Sobre Nós
            </Button>
        </nav>
    )
}

export default Menu;