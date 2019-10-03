import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressliqComponent } from './expressliq.component';

describe('ExpressliqComponent', () => {
  let component: ExpressliqComponent;
  let fixture: ComponentFixture<ExpressliqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressliqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressliqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
