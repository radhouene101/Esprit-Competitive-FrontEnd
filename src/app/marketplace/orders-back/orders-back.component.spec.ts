import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersBackComponent } from './orders-back.component';

describe('OrdersBackComponent', () => {
  let component: OrdersBackComponent;
  let fixture: ComponentFixture<OrdersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
