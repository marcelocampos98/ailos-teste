import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'ailos-button',
  templateUrl: './ailos-button.component.html',
  styleUrls: ['./ailos-button.component.scss'],
})
export class AilosButtonComponent {
  @Input() label!: string;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() size: 'lg' | 'md' | 'sm' = 'md';
  @Input() disabled = false;
  @Input() loading = false;

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  @Output() public onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public click() {
    this.onClick.emit(true);
  }
}
