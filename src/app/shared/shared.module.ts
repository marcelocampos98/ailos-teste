import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AilosInputComponent } from './components/ailos-input/ailos-input.component';
import { AilosCardComponent } from './components/ailos-card/ailos-card.component';
import { AilosButtonComponent } from './components/ailos-button/ailos-button.component';
import { AilosStepperComponent } from './components/ailos-stepper/ailos-stepper.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AilosFooterComponent } from './components/ailos-footer/ailos-footer.component';
import { AilosInputErrorComponent } from './components/ailos-input-error/ailos-input-error.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AilosInputComponent,
    AilosCardComponent,
    AilosButtonComponent,
    AilosStepperComponent,
    AilosFooterComponent,
    AilosInputErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    AilosInputComponent,
    AilosCardComponent,
    AilosStepperComponent,
    AilosButtonComponent,
    AilosFooterComponent,
  ],
})
export class SharedModule {}
