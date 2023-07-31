import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosInputComponent } from './ailos-input.component';

describe('AilosInputComponent', () => {
  let component: AilosInputComponent;
  let fixture: ComponentFixture<AilosInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AilosInputComponent]
    });
    fixture = TestBed.createComponent(AilosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
