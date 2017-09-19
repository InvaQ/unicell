import { fetch, parseResponse } from 'redux-oauth';
import { isUserSignedIn } from 'redux/models/user';

export const USERS_REQUEST_STARTED = 'TIME_REQUEST_STARTED';
export const USERS_REQUEST_FINISHED = 'TIME_REQUEST_FINISHED';
export const USERS_REQUEST_ERROR = 'TIME_REQUEST_ERROR';

function userRequestStarted() {
  return { type: USERS_REQUEST_STARTED };
}

function userRequestFinished(users) {
  return { type: USERS_REQUEST_FINISHED, users };
}

function userRequestError(errors) {
  return { type: USERS_REQUEST_ERROR, errors };
}

export function userRequest() {
  return (dispatch, getState) => {
    if (!isUserSignedIn(getState())) {
      return Promise.resolve();
    }

    dispatch(userRequestStarted());

    return dispatch(fetch('http://192.168.1.5:3000/users/get_users'))
      .then(parseResponse)
      .then(({ payload }) => dispatch(userRequestFinished(payload.users)))
      .catch(({ errors }) => dispatch(userRequestError(errors)));
  };
}
