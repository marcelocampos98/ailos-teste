import { Component, Input } from '@angular/core';

@Component({
  selector: 'ailos-stepper',
  templateUrl: './ailos-stepper.component.html',
  styleUrls: ['./ailos-stepper.component.scss'],
})
export class AilosStepperComponent {
  @Input() steps!: any;
  @Input() activeStep = 1;
}
