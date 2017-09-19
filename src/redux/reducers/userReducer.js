import { USERS_REQUEST_STARTED, USERS_REQUEST_FINISHED, USERS_REQUEST_ERROR } from 'redux/actions/userActions';

const initialState = {
  users: null,
  errors: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USERS_REQUEST_STARTED:
      return Object.assign({}, state, { loading: true, errors: null });
    case USERS_REQUEST_FINISHED:
      return {
        loading: false,
        errors: null,
        users: action.users
      };
    case USERS_REQUEST_ERROR:
      return Object.assign({}, state, { loading: false, errors: action.errors });
    default:
      return state;
  }
}
