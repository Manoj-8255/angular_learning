import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { logout } from "../login/state/login.actions";
import { LoginState } from "../login/state/login.reducer";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  title = "Angular learning";
  isLoggedIn = false;
  constructor(private store: Store<LoginState>) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("Bearer Token")
      ? !this.isLoggedIn
      : this.isLoggedIn;
  }

  logout() {
    this.store.dispatch(logout());
  }
}
