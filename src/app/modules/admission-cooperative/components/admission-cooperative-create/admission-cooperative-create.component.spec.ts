import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCooperativeCreateComponent } from './admission-cooperative-create.component';

describe('AdmissionCooperativeCreateComponent', () => {
  let component: AdmissionCooperativeCreateComponent;
  let fixture: ComponentFixture<AdmissionCooperativeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionCooperativeCreateComponent]
    });
    fixture = TestBed.createComponent(AdmissionCooperativeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
