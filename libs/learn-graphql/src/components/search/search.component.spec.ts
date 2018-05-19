import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs/observable/of';

import { LinkItemComponent } from '../../components/link-item/link-item.component';
import { AuthService } from '../../services/auth.service';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SearchComponent, LinkItemComponent],
        imports: [FormsModule],
        providers: [
          { provide: Apollo, useValue: {} },
          { provide: AuthService, useValue: { isAuthenticated: of(true) } }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
