import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashnoardComponent } from './customer-dashnoard.component';

describe('CustomerDashnoardComponent', () => {
  let component: CustomerDashnoardComponent;
  let fixture: ComponentFixture<CustomerDashnoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDashnoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashnoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
