const initialState = {
  email: '',
  pass: '',
  status: 0, //0 => não verificado,1 => logado, 2 => não logado
  msg: '',
};

const AuthReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_EMAIL') {
    return {...state, email: action.payload.email};
  }
  if (action.type === 'CHANGE_STATUS') {
    return {...state, status: action.payload.status};
  }
  if (action.type === 'SET_EMAIL_FIELD') {
    return {...state, email: action.payload.email};
  }
  if (action.type === 'SET_PASSWORD_FIELD') {
    return {...state, email: action.payload.pass};
  }

  return state;
};

export {AuthReducer};
