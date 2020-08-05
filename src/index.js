import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Pagina404 from './pages/Page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/SobreNos" component={SobreNos} />
      <Route path="/" component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
