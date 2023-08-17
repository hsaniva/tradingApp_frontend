import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrderViewComponent } from './delete-order-view.component';

describe('DeleteOrderViewComponent', () => {
  let component: DeleteOrderViewComponent;
  let fixture: ComponentFixture<DeleteOrderViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteOrderViewComponent]
    });
    fixture = TestBed.createComponent(DeleteOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
