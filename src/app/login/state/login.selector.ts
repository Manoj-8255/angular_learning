import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.reducer";

export const loginStateSelector = createFeatureSelector<LoginState>("login");

export const getUserState = createSelector(
  loginStateSelector,
  (state) => state.user
);

export const getLoginStatus = createSelector(
  loginStateSelector,
  (state) => state.isLoading
);


export const selectError = createSelector(
  loginStateSelector,
  (state) => state.error
);