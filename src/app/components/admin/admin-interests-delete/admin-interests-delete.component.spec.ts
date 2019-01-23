import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterestsDeleteComponent } from './admin-interests-delete.component';

describe('AdminInterestsDeleteComponent', () => {
  let component: AdminInterestsDeleteComponent;
  let fixture: ComponentFixture<AdminInterestsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInterestsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInterestsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
