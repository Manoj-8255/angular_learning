import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as LoginAction from './state/login.actions';
import { LoginState } from './state/login.reducer';
import { loginStateSelector } from './state/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';
  username = 'kminchelle';
  password = '0lelplR';
  bgcolor = 'red'
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<LoginState>,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['kminchelle', Validators.minLength(5)],
      password: ['0lelplR', Validators.required],
    });

    this.store.select(loginStateSelector).subscribe(res => {
      if (res.user){
        this.router.navigate(['/home']);
      }
    } );
  }


  onSubmit() {
    const { username, password } = this.form.value;
    this.store.dispatch(LoginAction.login({username, password}))
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
