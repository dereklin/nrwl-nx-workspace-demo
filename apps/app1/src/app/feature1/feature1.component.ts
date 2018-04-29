import { Component, OnInit, Inject } from '@angular/core';
import { HTTPSERVICE } from '@nrwl-nx-workspace-demo/app-tokens';
import { HttpService } from '@nrwl-nx-workspace-demo/app-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements OnInit {
  public mySvg$: Observable<any>;
  constructor(@Inject(HTTPSERVICE) private httpService: HttpService, private domSanitizer: DomSanitizer) {}

  public ngOnInit() {
    this.mySvg$ = this.httpService.post('', '', '').pipe(map((svg) => svg.svg));
  }
}
