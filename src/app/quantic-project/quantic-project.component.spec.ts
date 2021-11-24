import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanticProjectComponent } from './quantic-project.component';

describe('QuanticProjectComponent', () => {
  let component: QuanticProjectComponent;
  let fixture: ComponentFixture<QuanticProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanticProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanticProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
