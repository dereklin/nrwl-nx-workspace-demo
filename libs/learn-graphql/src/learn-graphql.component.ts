import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learn-graphql',
  templateUrl: './learn-graphql.component.html',
  styleUrls: ['./learn-graphql.component.scss']
})
export class LearnGraphqlComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    const temp = this.activatedRoute;
    this.activatedRoute.url.subscribe(url => {
      console.log(url);
    });
  }

  public ngOnInit() {}
}
