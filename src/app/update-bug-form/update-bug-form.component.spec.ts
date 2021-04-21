import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBugFormComponent } from './update-bug-form.component';

describe('UpdateBugFormComponent', () => {
  let component: UpdateBugFormComponent;
  let fixture: ComponentFixture<UpdateBugFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBugFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
