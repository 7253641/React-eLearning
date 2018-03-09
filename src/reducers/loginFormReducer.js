import { TOGGLE_LOGINFORM_STATE } from '../constants/formConstants';

const initialState = { open: false };

const LoginFormReducer = (action, state = initialState) => {
  if (action.type === 'TOGGLE_LOGINFORM_STATE') {
    return { ...state, open: !state.open };
  }
  return { ...state };
};

export default LoginFormReducer;
