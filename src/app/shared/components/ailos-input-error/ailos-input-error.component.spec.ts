import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosInputErrorComponent } from './ailos-input-error.component';

describe('AilosInputErrorComponent', () => {
  let component: AilosInputErrorComponent;
  let fixture: ComponentFixture<AilosInputErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AilosInputErrorComponent]
    });
    fixture = TestBed.createComponent(AilosInputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
