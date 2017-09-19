import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import App from 'components/App';
import Main from 'components/Main';
import UserPage from 'components/UserPage';
import { isUserSignedIn } from 'redux/models/user';

function requireAuth(nextState, transition, cb) {
  setTimeout(() => {
    if (!isUserSignedIn(store.getState())) {
      transition('/');
    }
    cb();
  }, 0);
}

let store;

export default function routes(storeRef) {
  store = storeRef;

  return (
    <Route component={App} path='/'>
      <IndexRoute component={Main} />
      <Route component={UserPage} path='users' onEnter={requireAuth} />
    </Route>
  );
}
