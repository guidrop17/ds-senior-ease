import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent, BadgeVariant, IconComponent, IconName, TextComponent } from '../../atoms';

export interface ListItemData {
  title: string;
  description?: string;
  meta?: string;
  badgeLabel?: string;
  badgeVariant?: BadgeVariant;
  icon?: IconName;
  ariaLabel?: string;
}

@Component({
  selector: 'ui-list-item',
  standalone: true,
  imports: [CommonModule, BadgeComponent, IconComponent, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ListItemComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() meta = '';
  @Input() badgeLabel = '';
  @Input() badgeVariant: BadgeVariant = 'neutral';
  @Input() icon: IconName = 'calendar';
  @Input() ariaLabel = '';
}
