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

import SplashPageContainer from './splashpage/splashpage_container';
import GlobalHeaderContainer from './global_header/global_header_container';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectShowContainer from './project_show/project_show_container';
import ProjectFormContainer from './project_create/project_form_container';
import UserInfoContainer from './user_info/user_info_container';
import ProjectEditContainer from './project_edit/project_edit_container';
import SearchPage from './search/search_page_container';

const App = () => (
  <div>
    <GlobalHeaderContainer />
    <Route exact path="/" component={SplashPageContainer} />

  <Switch>
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserInfoContainer} />

      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
      <ProtectedRoute exact path="/projects/:projectId/edit" component={ProjectEditContainer} />

      <ProtectedRoute exact path="/create" component={ProjectFormContainer} />
      <Route path="/search" component={SearchPage} />
    </Switch>
  </div>
);

export default App;
