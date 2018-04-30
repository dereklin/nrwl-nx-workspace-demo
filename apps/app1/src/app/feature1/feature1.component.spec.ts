import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component } from './feature1.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SparklinesModule } from '../components/sparklines/sparklines.module';
import { HttpClientService } from '@nrwl-nx-workspace-demo/http-client-service';
import { HTTPSERVICE, HTTPSERVICESETTINGS } from '@nrwl-nx-workspace-demo/app-tokens';
import { SimpleHttpService } from '@nrwl-nx-workspace-demo/simple-http-service';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

describe('Feature1Component', () => {
  let component: Feature1Component;
  let fixture: ComponentFixture<Feature1Component>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SparklinesModule, HttpClientModule],
        declarations: [Feature1Component],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          HttpClientService,
          {
            provide: HTTPSERVICE,
            useClass: SimpleHttpService
          },
          { provide: HTTPSERVICESETTINGS, useValue: environment.httpServiceSettings }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
