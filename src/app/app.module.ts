import { AdmissionCooperativeModule } from './modules/admission-cooperative/admission-cooperative.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { SideNavModule } from './core/side-nav/side-nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SideNavModule,
    AdmissionCooperativeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
