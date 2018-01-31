import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundColorRandomizer } from '@nrwl-nx-workspace-demo';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.css']
})
export class Feature3Component implements OnInit, AfterViewInit {
  public dropdownConfig = {
    subject: 'Movies',
    labelKey: 'title'
  };
  public movieData: any = [];

  constructor(
    private route: ActivatedRoute,
    private backgroundColorRandomizer: BackgroundColorRandomizer
  ) {}

  private movieStore: any[];

  public ngOnInit() {
    this.movieStore = this.route.snapshot.data['movieData'];
  }

  public ngAfterViewInit(): void {
    this.backgroundColorRandomizer.randomize();
  }

  public loadMovies() {
    this.movieData = [...this.movieStore];
  }

  public clearMovies() {
    this.movieData = [];
  }
}
