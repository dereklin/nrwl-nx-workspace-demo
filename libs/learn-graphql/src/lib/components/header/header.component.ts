import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logged: boolean = false;

  constructor(private authService: AuthService) {}

  public ngOnInit() {
    this.authService.isAuthenticated.pipe(distinctUntilChanged()).subscribe((isAuthenticated) => {
      this.logged = isAuthenticated;
    });
  }

  public logout() {
    this.authService.logout();
  }
}
