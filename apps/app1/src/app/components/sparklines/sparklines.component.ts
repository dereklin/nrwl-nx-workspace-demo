import { Component, OnInit } from '@angular/core';

declare function escape(s: string): string;
declare function unescape(s: string): string;

// ucs-2 string to base64 encoded ascii
function utoa(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

// // Usage:
// utoa('✓ à la mode'); // 4pyTIMOgIGxhIG1vZGU=
// atou('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"

// utoa('I \u2661 Unicode!'); // SSDimaEgVW5pY29kZSE=
// atou('SSDimaEgVW5pY29kZSE='); // "I ♡ Unicode!"

@Component({
  selector: 'app-sparklines',
  templateUrl: './sparklines.component.html',
  styleUrls: ['./sparklines.component.scss']
})
export class SparklinesComponent implements OnInit {
  public svgBase64;
  private mySvg = `
  <svg class="chart">

  <polyline
     fill="none"
     stroke="#0074d9"
     stroke-width="2"
     points="
       00,120
       20,60
       40,80
       60,20
       80,80
       100,80
       120,60
       140,100
       160,90
       180,80
       200, 110
       220, 10
       240, 70
       260, 100
       280, 100
       300, 40
       320, 0
       340, 100
       360, 100
       380, 120
       400, 60
       420, 70
       440, 80
     "
   />

</svg>

  `;
  constructor() {}

  public ngOnInit() {
    this.svgBase64 = utoa(this.mySvg);
  }
}
