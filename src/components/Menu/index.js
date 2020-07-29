import React from 'react';
import { Link } from  'react-router-dom';
import Logo from '../../assets/img/LogoIvisFlix.png';
import './Menu.css';
import  Button from '../Button'
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu"> 
            <a to="/">
                <img className="Logo" src={Logo} alt="Logo IvisFlix" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;