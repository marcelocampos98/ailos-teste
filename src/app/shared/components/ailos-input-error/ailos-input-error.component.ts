import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'ailos-input-error',
  templateUrl: './ailos-input-error.component.html',
  styleUrls: ['./ailos-input-error.component.scss'],
})
export class AilosInputErrorComponent {
  @Input() control!: UntypedFormControl;

  public fieldErrorLabel(): string {
    if (this.control?.invalid && this.control?.touched) {
      if (this.control.hasError('required')) {
        return 'Campo Obrigatório';
      }

      if (this.control.hasError('documentInvalid')) {
        return 'CPF inválido';
      }
    }

    return '';
  }
}
