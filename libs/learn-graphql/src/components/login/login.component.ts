import { Component, OnInit } from '@angular/core';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login = true; // switch between Login and SignUp
  public email = '';
  public password = '';
  public name = '';

  constructor(private authService: AuthService) {}

  public ngOnInit() {}

  public confirm() {
    // ... you'll implement this in a bit
  }

  public saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.authService.setUserId(id);
  }
}
