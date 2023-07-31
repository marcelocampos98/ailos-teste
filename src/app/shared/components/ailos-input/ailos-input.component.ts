import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'ailos-input',
  templateUrl: './ailos-input.component.html',
  styleUrls: ['./ailos-input.component.scss'],
})
export class AilosInputComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() mask!: string;
  @Input() control!: UntypedFormControl;
}
