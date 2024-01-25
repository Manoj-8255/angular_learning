import { createAction, props } from "@ngrx/store";
import { User } from "../models/usermodel";

export const login = createAction('[login component] login', props<{username: string, password: string}>());

export const loginSuccess = createAction('[login component] login Success', props<{user: User }>());
export const loginFailure = createAction('[login component] login Failure', props<{error: string}>());


export const logout = createAction('[login component] logout');
export const logoutSuccess = createAction('[login component] logout success');
export const logoutFailure = createAction('[login component] logout failure');


export const isLoggedIn = createAction('[login component] islogged in');

export const isLoggedInSuccess = createAction('[login component] isLoggedIn Success', props<{isLoggedIn: boolean }>());
export const isLoggedInFailure = createAction('[login component] isLoggedIn Failure', props<{error: string}>());