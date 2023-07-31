import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionCooperativeCreateComponent } from './components/admission-cooperative-create/admission-cooperative-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdmissionCooperativeCreateComponent },
];

@NgModule({
  declarations: [AdmissionCooperativeCreateComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
  exports: [AdmissionCooperativeCreateComponent],
})
export class AdmissionCooperativeModule {}
