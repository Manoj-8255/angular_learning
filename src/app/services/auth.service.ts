import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  constructor() {}

  async authenticateUser(username: string, password: string): Promise<any> {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();
    if (data) {
      localStorage.setItem(this.authSecretKey, data.token);
      this.isAuthenticated = true;
    }
    return data;
  }

  isAuthenticatedUser(): boolean {
    if (localStorage.getItem(this.authSecretKey)) {
      this.isAuthenticated = true;
      return this.isAuthenticated;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}
