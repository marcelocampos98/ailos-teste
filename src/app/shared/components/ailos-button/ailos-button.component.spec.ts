import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosButtonComponent } from './ailos-button.component';

describe('AilosButtonComponent', () => {
  let component: AilosButtonComponent;
  let fixture: ComponentFixture<AilosButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AilosButtonComponent]
    });
    fixture = TestBed.createComponent(AilosButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
