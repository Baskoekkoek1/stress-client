import { LOG_OUT, LOGIN_SUCCES, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  email: null,
  id: null,
  firstName: null,
  lastName: null,
  phone: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCES:
      localStorage.getItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
