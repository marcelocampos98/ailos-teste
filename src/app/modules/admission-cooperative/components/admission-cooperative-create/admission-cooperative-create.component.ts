import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfCnpjValidators } from 'src/app/shared/validators/cpf-cnpj.validators';

@Component({
  selector: 'app-admission-cooperative-create',
  templateUrl: './admission-cooperative-create.component.html',
  styleUrls: ['./admission-cooperative-create.component.scss'],
})
export class AdmissionCooperativeCreateComponent implements OnInit {
  public steps = [
    { label: 'Inicio', id: 1 },
    { label: 'Documentos', id: 2 },
    { label: 'Dados cadastrais', id: 3 },
    { label: 'Admissão', id: 4 },
  ];

  public form!: FormGroup;

  public cooperated: any;
  public loading = false;

  public activeStep = 1;

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuild.group({
      document: [null, [Validators.required, CpfCnpjValidators.cpfCnpj]],
    });
  }

  public searchByDocument() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.cooperated = {
          name: 'Mariane de Sousa Oliveira',
          documentStatus: 'Regular',
          accounts: [
            {
              number: '557932',
              digit: '4',
              bank: 'Cooperativa Viacredi',
              type: 'Conta aplicação',
            },
            {
              number: '778461',
              digit: '8',
              bank: 'Cooperativa Viacredi',
              type: 'Conta corrente',
            },
          ],
        };
      }, 1000);
    }
  }
}
