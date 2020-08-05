import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Gif404 from '../../assets/img/404.gif'

const pStyle = {
  textAlign: 'center'
};

function Page404() {
  return (
    <PageDefault>
        <p style={pStyle}>
            <img src={Gif404} />
            <br/>
            A página que você está procurando não existe :(! 
            <br/>
            <Link to="/">
              Ir para Home
            </Link>
        </p>
    </PageDefault>
  );
}

export default Page404;
