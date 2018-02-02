import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { login, signup, logout } from './util/session_api_util';
// import { login, signup, logout, clear } from './actions/session_actions';
import * as ProjectAPIUtil from './util/project_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);

    delete window.currentUser;
  } else {
    store = configureStore();
  }

   // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.ProjectAPIUtil = ProjectAPIUtil;
   // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
