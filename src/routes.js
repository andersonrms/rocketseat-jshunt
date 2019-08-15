import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
  /* 
    BROWSERROUTER - DEFINE QUE ESTAMOS UTILIZANDO ROTAS ATRAVES DO BROWSER
    SWITCH PERMITE UMA PÁGINA A CADA ROTA
  */
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
);

export default Routes;