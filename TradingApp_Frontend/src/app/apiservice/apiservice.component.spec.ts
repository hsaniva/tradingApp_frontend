import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIServiceComponent } from './apiservice.component';

describe('APIServiceComponent', () => {
  let component: APIServiceComponent;
  let fixture: ComponentFixture<APIServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIServiceComponent]
    });
    fixture = TestBed.createComponent(APIServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
