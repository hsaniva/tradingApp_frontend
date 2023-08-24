import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketviewComponent } from './marketview.component';

describe('MarketviewComponent', () => {
  let component: MarketviewComponent;
  let fixture: ComponentFixture<MarketviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarketviewComponent]
    });
    fixture = TestBed.createComponent(MarketviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
