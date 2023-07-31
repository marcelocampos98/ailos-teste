import { AbstractControl, ValidationErrors } from '@angular/forms';
import { GenericUtils } from '../utils/generic.utils';

export class CpfCnpjValidators {
  static cpfCnpj(control: AbstractControl): ValidationErrors | null {
    const cpfCnpj = control.value;
    if (cpfCnpj) {
      if (cpfCnpj.length == 11) return GenericUtils.validateCpf(cpfCnpj);
      if (cpfCnpj.length == 14) return GenericUtils.validateCnpj(cpfCnpj);
    }

    return { documentInvalid: true };
  }
}
