import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutingIndexComponent } from './outing-index.component';

describe('OutingIndexComponent', () => {
  let component: OutingIndexComponent;
  let fixture: ComponentFixture<OutingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
