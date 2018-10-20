import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input()
  public goals: number;
  @Input()
  public name: string;

  public onGoal() {}

  public onChangeName() {}

  constructor() {}

  public ngOnInit() {}
}
