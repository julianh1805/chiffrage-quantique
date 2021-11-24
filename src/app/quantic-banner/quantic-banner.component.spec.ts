import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanticBannerComponent } from './quantic-banner.component';

describe('QuanticBannerComponent', () => {
  let component: QuanticBannerComponent;
  let fixture: ComponentFixture<QuanticBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanticBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanticBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
