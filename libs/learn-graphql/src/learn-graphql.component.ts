import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-learn-graphql',
  templateUrl: './learn-graphql.component.html',
  styleUrls: ['./learn-graphql.component.scss']
})
export class LearnGraphqlComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.autoLogin();
  }
}
