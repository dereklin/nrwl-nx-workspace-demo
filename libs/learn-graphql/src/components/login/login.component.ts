import { Component, OnInit } from '@angular/core';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = true; // switch between Login and SignUp
  email = '';
  password = '';
  name = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  confirm() {
    // ... you'll implement this in a bit
  }

  saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.authService.setUserId(id);
  }
}
