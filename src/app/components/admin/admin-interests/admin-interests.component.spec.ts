import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterestsComponent } from './admin-interests.component';

describe('AdminInterestsComponent', () => {
  let component: AdminInterestsComponent;
  let fixture: ComponentFixture<AdminInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
