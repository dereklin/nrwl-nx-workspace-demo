import { NO_ERRORS_SCHEMA } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { FancyBoxComponent } from './fancy-box.component';

storiesOf('LIBS|FancyBox/FancyBoxComponent', module)
  .add('This one works', () => ({
    moduleMetadata: {
      imports: [],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FancyBoxComponent],
      providers: []
    },
    props: {
      config: {
        selectable: true,
        order: 'ABCD',
        selected: false,
        showRemoveMark: false,
        useSemantic: true
      }
    },
    styles: [
      `
      .context {
        height: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      fancy-box {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto 0;
        grid-template-areas:
          'order order order order order order'
          'size size size size tip tip';

        ::ng-deep {
          .size,
          .ship,
          .tip {
            display: none;
          }
          .order {
            justify-content: center;
          }
        }
      }

      fancy-box::ng-deep .size,
      fancy-box::ng-deep .ship,
      fancy-box::ng-deep .tip {
        display: none !important;
      }

      fancy-box::ng-deep .order {
        justify-content: center !important;
      }

      fancy-box::ng-deep .ui.mini.buttons .button,
      fancy-box::ng-deep .ui.mini.buttons .or,
      fancy-box::ng-deep .ui.mini.button {
        font-size: 0.5rem;
      }

    `
    ],
    template: `
    <div class="context">
    <fancy-box [config]="config">
              </fancy-box>
    </div>
              `
  }))
  .add("This one doesn't work", () => ({
    moduleMetadata: {
      imports: [],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FancyBoxComponent],
      providers: []
    },
    props: {
      config: {
        selectable: true,
        order: 'ABCD',
        selected: false,
        showRemoveMark: false,
        useSemantic: true
      }
    },
    styles: [
      `
      .context {
        height: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      fancy-box {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto 0;
        grid-template-areas:
          'order order order order order order'
          'size size size size tip tip';

        ::ng-deep {
          .size,
          .ship,
          .tip {
            display: none;
          }
          .order {
            justify-content: center;
          }
        }
      }

      fancy-box::ng-deep .ui.mini.buttons .button,
      fancy-box::ng-deep .ui.mini.buttons .or,
      fancy-box::ng-deep .ui.mini.button {
        font-size: 0.5rem;
      }

    `
    ],
    template: `
    <div class="context">
    <fancy-box [config]="config">
              </fancy-box>
    </div>
              `
  }));
