import { Component, OnInit } from '@angular/core';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { SIGNIN_USER_MUTATION, CREATE_USER_MUTATION } from '../../graphql';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: boolean = true; // switch between Login and SignUp
  public email: string = '';
  public password: string = '';
  public name: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {}

  public confirm() {
    if (this.login) {
      this.apollo
        .mutate({
          mutation: SIGNIN_USER_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .subscribe(
          result => {
            const signinUser = result.data.authenticateUser;
            const id = signinUser.id;
            const token = signinUser.token;
            this.saveUserData(id, token);

            this.router.navigate(['..'], { relativeTo: this.route });
          },
          error => {
            alert(error);
          }
        );
    } else {
      this.apollo
        .mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            name: this.name,
            email: this.email,
            password: this.password
          }
        })
        .subscribe(
          result => {
            const signupUser = result.data.authenticateUser;
            const id = signupUser.id;
            const token = signupUser.token;
            this.saveUserData(id, token);

            this.router.navigate(['..'], { relativeTo: this.route });
          },
          error => {
            alert(error);
          }
        );
    }
  }

  public saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.authService.setUserId(id);
  }
}
