const INITIAL_STATE = {
  user: {},
};

function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_USER':
      return {user: action.data};
    default:
      return state;
  }
}

export default Auth;
