import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosStepperComponent } from './ailos-stepper.component';

describe('AilosStepperComponent', () => {
  let component: AilosStepperComponent;
  let fixture: ComponentFixture<AilosStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AilosStepperComponent]
    });
    fixture = TestBed.createComponent(AilosStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
