import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOutingsDeleteComponent } from './admin-outings-delete.component';

describe('AdminOutingsDeleteComponent', () => {
  let component: AdminOutingsDeleteComponent;
  let fixture: ComponentFixture<AdminOutingsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOutingsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOutingsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
