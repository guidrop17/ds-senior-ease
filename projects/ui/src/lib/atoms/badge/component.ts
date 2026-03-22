import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ui-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class BadgeComponent {
  @Input() label = '';
  @Input() variant: BadgeVariant = 'neutral';
  @Input() ariaLabel = '';
}
