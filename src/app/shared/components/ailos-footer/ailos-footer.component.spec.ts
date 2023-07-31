import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilosFooterComponent } from './ailos-footer.component';

describe('AilosFooterComponent', () => {
  let component: AilosFooterComponent;
  let fixture: ComponentFixture<AilosFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AilosFooterComponent]
    });
    fixture = TestBed.createComponent(AilosFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
