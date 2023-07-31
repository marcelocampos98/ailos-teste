import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  exports: [SideNavComponent],
  imports: [CommonModule],
})
export class SideNavModule {}
