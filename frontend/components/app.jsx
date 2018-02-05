import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

import GlobalHeaderContainer from './global_header/global_header_container';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectShowContainer from './project_show/project_show_container';

const App = () => (
  <div>
    <GlobalHeaderContainer />
    <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route path="/projects/:projectId" component={ProjectShowContainer} />
    </Switch>
  </div>
);

export default App;
