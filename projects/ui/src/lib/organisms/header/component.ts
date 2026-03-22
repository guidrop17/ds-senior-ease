import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent, ButtonComponent, TextComponent } from '../../atoms';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class HeaderComponent {
  @Input() badgeLabel = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() actionLabel = '';
}
