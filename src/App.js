import React, { Fragment } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import ProtectedRoute from './common/ProtectedRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Layout exact>
              <ProtectedRoute path='/' exact component={Dashboard} />
            </Layout>
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
