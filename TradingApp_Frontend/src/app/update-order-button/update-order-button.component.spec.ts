import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderButtonComponent } from './update-order-button.component';

describe('UpdateOrderButtonComponent', () => {
  let component: UpdateOrderButtonComponent;
  let fixture: ComponentFixture<UpdateOrderButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOrderButtonComponent]
    });
    fixture = TestBed.createComponent(UpdateOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
