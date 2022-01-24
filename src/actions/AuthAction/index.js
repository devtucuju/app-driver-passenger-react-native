import {verifyLogin, login} from '_services/api';

export const checkLogin = () => {
  return dispatch => {
    verifyLogin()
      .then(status => {
        dispatch({
          type: 'CHANGE_STATUS',
          payload: {
            status,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: 'CHANGE_STATUS_ERROR',
          payload: {
            status: 2,
          },
        });
      });
  };
};
export const setEmailField = email => {
  return {
    type: 'SET_EMAIL_FIELD',
    payload: {
      email,
    },
  };
};
export const setPasswordField = pass => {
  return {
    type: 'SET_PASSWORD_FIELD',
    payload: {
      pass,
    },
  };
};
export const signIn = (email, pass) => {
  return dispatch => {
    login(email, pass)
      .then(status => {
        if (status === 2) {
          dispatch({
            type: 'SIGN_IN_ALERT',
            payload: {
              msg: 'Email e/ou senha incorretos!',
            },
          });
        }
        dispatch({
          type: 'CHANGE_STATUS',
          payload: {
            status,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: 'SIGN_IN_ERROR',
          payload: {
            msg: 'Tente novamente mais tarde!',
          },
        });
      });
  };
};
