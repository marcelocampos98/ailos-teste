import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosCardComponent } from './ailos-card.component';

describe('AilosCardComponent', () => {
  let component: AilosCardComponent;
  let fixture: ComponentFixture<AilosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AilosCardComponent]
    });
    fixture = TestBed.createComponent(AilosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
