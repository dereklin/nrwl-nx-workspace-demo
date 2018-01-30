import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.css']
})
export class Feature3Component implements OnInit {
  public dropdownConfig = {
    subject: 'Movies',
    labelKey: 'title'
  };
  public movieData: any = [];

  constructor(private route: ActivatedRoute) {}

  private movieStore: any[];

  public ngOnInit() {
    this.movieStore = this.route.snapshot.data['movieData'];
  }

  public loadMovies() {
    this.movieData = [...this.movieStore];
  }

  public clearMovies() {
    this.movieData = [];
  }
}
