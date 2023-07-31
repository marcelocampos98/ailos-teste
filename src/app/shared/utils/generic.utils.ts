import { ValidationErrors } from '@angular/forms';

export class GenericUtils {
  static validateCpf(document: string): ValidationErrors | null {
    if (GenericUtils.isValidCPF(document)) {
      return null;
    }
    return { documentInvalid: true, type: 'CPF' };
  }

  static validateCnpj(cnpj: string): ValidationErrors | null {
    if (GenericUtils.isValidCNPJ(cnpj)) {
      return null;
    }
    return { documentInvalid: true, type: 'CNPJ' };
  }

  static isValidCNPJ(cnpj: string): boolean {
    let numbers, digits, sum, i, result, pos, size, digitsEquals;

    digitsEquals = 1;
    if (cnpj.length < 14 && cnpj.length < 15) {
      return false;
    }
    for (i = 0; i < cnpj.length - 1; i++) {
      if (cnpj.charAt(i) !== cnpj.charAt(i + 1)) {
        digitsEquals = 0;
        break;
      }
    }
    if (!digitsEquals) {
      size = cnpj.length - 2;
      numbers = cnpj.substring(0, size);
      digits = cnpj.substring(size);
      sum = 0;
      pos = size - 7;
      for (i = size; i >= 1; i--) {
        sum += parseInt(numbers.charAt(size - i), 10) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
      result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
      if (result !== parseInt(digits.charAt(0), 10)) {
        return false;
      }
      size = size + 1;
      numbers = cnpj.substring(0, size);
      sum = 0;
      pos = size - 7;
      for (i = size; i >= 1; i--) {
        sum += parseInt(numbers.charAt(size - i), 10) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
      result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
      if (result !== parseInt(digits.charAt(1), 10)) {
        return false;
      }

      return true;
    }

    return false;
  }

  static isValidCPF(document: string): boolean {
    const numbers = '0123456789';

    if (document.length !== 11) {
      return false;
    }

    if (
      [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
      ].includes(document)
    ) {
      return false;
    }

    let number = 0;
    let caracter = '';
    let j = 10;
    let sum = 0;
    let rest = 0;
    let digit1 = 0;
    let digit2 = 0;
    let cpfAux = '';

    cpfAux = document.substring(0, 9);
    for (let i = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numbers.search(caracter) === -1) {
        return false;
      }
      number = Number(caracter);
      sum = sum + number * j;
      j--;
    }

    rest = sum % 11;
    digit1 = 11 - rest;
    if (digit1 > 9) {
      digit1 = 0;
    }

    j = 11;
    sum = 0;
    cpfAux = cpfAux + digit1;
    for (let i = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      number = Number(caracter);
      sum = sum + number * j;
      j--;
    }

    rest = sum % 11;
    digit2 = 11 - rest;
    if (digit2 > 9) {
      digit2 = 0;
    }

    cpfAux = cpfAux + digit2;
    if (document !== cpfAux) {
      return false;
    }

    return true;
  }
}
