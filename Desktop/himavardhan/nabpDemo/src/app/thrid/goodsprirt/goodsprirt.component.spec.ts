import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsprirtComponent } from './goodsprirt.component';

describe('GoodsprirtComponent', () => {
  let component: GoodsprirtComponent;
  let fixture: ComponentFixture<GoodsprirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsprirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsprirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
