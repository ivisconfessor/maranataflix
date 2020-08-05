import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/LogoMaranataFlix2.png';

function Footer() {
  return (
    <FooterBase>
      <p>
        <img src={Logo} alt="Logo GospelFlix" />
      </p>
      <p>
        No entanto, está chegando a hora, e de fato já chegou,
        em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. <br/> 
        São estes os adoradores que o Pai procura.
        João 4:23
        <br/>
        <br/> 
        Orgulhosamente criado com a ajuda do time TOP da
        {' '}
        <a href="https://www.alura.com.br/">
          Alura 
        </a>
        {' '}durante a #ImersaoReact 27/07 à 31/07/2020
      </p>
    </FooterBase>
  );
}

export default Footer;
