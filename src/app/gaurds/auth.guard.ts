import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  checkAuth() {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['']);
      return false;
    }
  }
}
