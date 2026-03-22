import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent, ButtonComponent, TextComponent } from '../../atoms';

@Component({
  selector: 'ui-hero-card',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class HeroCardComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() description = '';
  @Input() primaryActionLabel = '';
  @Input() secondaryActionLabel = '';
  @Input() highlightLabel = '';
  @Input() highlightValue = '';
}
