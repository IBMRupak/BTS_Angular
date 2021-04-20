import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbugformComponent } from './searchbugform.component';

describe('SearchbugformComponent', () => {
  let component: SearchbugformComponent;
  let fixture: ComponentFixture<SearchbugformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbugformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbugformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
