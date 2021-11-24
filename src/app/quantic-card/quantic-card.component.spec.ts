import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanticCardComponent } from './quantic-card.component';

describe('QuanticCardComponent', () => {
  let component: QuanticCardComponent;
  let fixture: ComponentFixture<QuanticCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanticCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
