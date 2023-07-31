import { Component, Input } from '@angular/core';

@Component({
  selector: 'ailos-card',
  templateUrl: './ailos-card.component.html',
  styleUrls: ['./ailos-card.component.scss'],
})
export class AilosCardComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
}
