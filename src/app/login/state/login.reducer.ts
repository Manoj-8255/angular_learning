import { createReducer, on } from "@ngrx/store";

import { User } from "../models/usermodel";
import * as loginAction from "../state/login.actions";

export interface LoginState {
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string;
}

export const initialState = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(loginAction.login, (state) => ({ ...state, isLoading: true })),
  on(loginAction.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
  })),
  on(loginAction.loginFailure, (state) => ({
    ...state,
    error: "Invalid User/Password" as any,
  })),
  on(loginAction.logout, () => initialState)
);
