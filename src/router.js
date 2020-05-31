import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AppTest from './routes/AppTest';
import ProductList from './routes/ProductList';
import HooksDemo from './routes/HooksDemo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage} />
        <Route path="/" exact component={AppTest} />
        <Route path="/list" exact component={ProductList} />
        <Route path="/hooks" exact component={HooksDemo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
