import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOutingsComponent } from './admin-outings.component';

describe('AdminOutingsComponent', () => {
  let component: AdminOutingsComponent;
  let fixture: ComponentFixture<AdminOutingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOutingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
