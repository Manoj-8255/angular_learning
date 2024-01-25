import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { loginEffects } from './state/login.effects';
import { loginReducer } from './state/login.reducer';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature(loginEffects)
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
