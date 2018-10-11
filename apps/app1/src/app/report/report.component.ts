import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

declare const $;

const htmlContent = `
<!DOCTYPE html>
<html>

<head>
  <style>
    .header {
      grid-area: header;
      height: 60px;
      background-color: black;
    }

    .cost-table {
      grid-area: cost-table;
      background-color: aqua;
    }

    .selection-criteria {
      grid-area: selection-criteria;
      background-color: green;
    }

    .chart1 {
      grid-area: chart1;
      background-color: pink;
    }

    .chart2 {
      grid-area: chart2;
      background-color: yellow;
    }

    .chart3 {
      grid-area: chart3;
      background-color: blue;
    }

    .profile {
      grid-area: profile;
      background-color:violet;
    }

    #contentToConvert {
      display: grid;
      padding: 0.5em;
      grid-gap: 0;
      grid-template-columns: 1fr 200px;
      grid-template-rows: auto repeat(5, 1fr);
      grid-template-areas:
        'header header'
        'cost-table profile'
        'selection-criteria profile'
        'chart1  profile'
        'chart2 profile'
        'chart3  profile';
    }
  </style>
</head>

<body>
  <div class="module-wrapper">
    <div id="contentToConvert">
      <div class="header">
        <h1>Hello Header</h1>
      </div>
      <div class="cost-table">
          <h1>Hello cost</h1>
      </div>

      <div class="selection-criteria">

      </div>

      <div class="chart1">

      </div>
      <div class="chart2">

      </div>

      <div class="chart3">

      </div>
      <div class="profile">

      </div>
    </div>

  </div>
</body>

</html>
`;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent implements OnInit {
  constructor() {}

  public ngOnInit() {}

  public captureScreen() {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlContent, 'text/html');
    const body = parsedHtml.body;
    const data2 = parsedHtml.getElementById('contentToConvert');
    const data = document.getElementById('contentToConvert');
    const page2 = document.getElementById('contentToConvert2');
    // const clone = data.cloneNode();
    // const el = parser.
    // clone.setAttribute('style', 'opacity: 1;');
    // tslint:disable
    // data2['ownerDocument']['defaultView' as any] = window;

    const pdf = new jspdf('p', 'mm', 'letter'); // A4 size page of PDF

    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      // pdf.addPage();
      // pdf.save('MYPdf.pdf'); // Generated PDF
    });
    html2canvas(page2).then((canvas) => {
      pdf.addPage();
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      // pdf.addPage();
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
}
