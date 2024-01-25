import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { AuthGuard } from "./gaurds/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginModule } from "./login/login.module";
import { AuthService } from "./services/auth.service";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AlertComponent } from "./alert/alert.component";
import { HeaderComponent } from "./header/header.component";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { RepoService } from "./services/RepoService.service";

@NgModule({
  declarations: [AppComponent, HighlightDirective, HomeComponent, HeaderComponent, AlertComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    RepoService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
