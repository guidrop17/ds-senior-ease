import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faBookOpen,
  faCalendarDay,
  faChartLine,
  faCheck,
  faClock,
  faEnvelope,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export type IconName =
  | 'bell'
  | 'book'
  | 'calendar'
  | 'chart'
  | 'check'
  | 'clock'
  | 'home'
  | 'message'
  | 'user';
export type IconValue = IconName | IconDefinition;

@Component({
  selector: 'ui-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class IconComponent {
  @Input() name: IconName = 'home';
  @Input() icon: IconDefinition | null = null;
  @Input() decorative = true;
  @Input() ariaLabel = '';

  protected readonly iconMap: Record<IconName, IconDefinition> = {
    bell: faBell,
    book: faBookOpen,
    calendar: faCalendarDay,
    chart: faChartLine,
    check: faCheck,
    clock: faClock,
    home: faHouse,
    message: faEnvelope,
    user: faUser,
  };

  protected get resolvedIcon(): IconDefinition {
    return this.icon ?? this.iconMap[nameOrFallback(this.name)];
  }
}

function nameOrFallback(name: IconName | null | undefined): IconName {
  return name ?? 'home';
}
