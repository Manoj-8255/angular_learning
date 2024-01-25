import { catchError, from, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import {
  login,
  loginFailure,
  loginSuccess,
  logout
} from "../state/login.actions";

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { User } from "../models/usermodel";

@Injectable()
export class loginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        from(this.authService.authenticateUser(username, password)).pipe(
          map(
            (user: User) => loginSuccess({ user }),
            catchError((error) => of(loginFailure({ error })))
          )
        )
      )
    )
  );
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => {
        this.authService.logout();
      })
    )
  );
  constructor(private actions$: Actions, private authService: AuthService) {}
}
