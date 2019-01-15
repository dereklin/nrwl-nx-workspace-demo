import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nrwl-nx-workspace-demo-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnInit {
  constructor() {}

  public ngOnInit() {}
}
