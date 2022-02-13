import {
  loginFailuer,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from './userRedux';
import { publicRequest } from '../requestMethod';

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
    navigate('/');
  } catch (error) {
    dispatch(loginFailuer());
  }
};

export const register = async (dispatch, user, navigate) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    console.log(res);
    dispatch(registerSuccess(res.data));
    navigate('/');
  } catch (error) {
    dispatch(registerFailure());
  }
};
