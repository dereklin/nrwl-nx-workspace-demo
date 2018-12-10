import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundColorRandomizer } from '@nrwl-nx-workspace-demo/background-color-randomizer';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.css']
})
export class Feature3Component implements OnInit, AfterViewInit {
  public test;

  public dropdownConfig = {
    subject: 'Movies',
    labelKey: 'title'
  };
  public movieData: any = [];

  @ViewChild('feature3')
  public feature3: any;

  constructor(private route: ActivatedRoute, private backgroundColorRandomizer: BackgroundColorRandomizer) {
    this.test = 'test2';
  }

  private movieStore: any[];

  public ngOnInit() {
    this.movieStore = this.route.snapshot.data['movieData'];
  }

  public ngAfterViewInit(): void {
    this.backgroundColorRandomizer.randomize(this.feature3.nativeElement);
  }

  public loadMovies() {
    this.movieData = [...this.movieStore];
  }

  public clearMovies() {
    this.movieData = [];
  }
}
