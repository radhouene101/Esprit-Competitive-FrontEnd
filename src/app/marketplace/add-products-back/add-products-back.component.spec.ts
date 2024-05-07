import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsBackComponent } from './add-products-back.component';

describe('AddProductsBackComponent', () => {
  let component: AddProductsBackComponent;
  let fixture: ComponentFixture<AddProductsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
