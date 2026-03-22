import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconComponent, IconName, IconValue, TextComponent } from '../../atoms';

export interface NavItemData {
  label: string;
  icon?: IconValue;
  description?: string;
  active?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  path?: string | readonly string[];
}

@Component({
  selector: 'ui-nav-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class NavItemComponent {
  @Input() label = '';
  @Input() icon: IconValue = 'home';
  @Input() description = '';
  @Input() active = false;
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Input() routerLink: string | readonly string[] | null = null;

  protected get iconName(): IconName {
    return typeof this.icon === 'string' ? this.icon : 'home';
  }

  protected get iconDefinition(): IconDefinition | null {
    return typeof this.icon === 'string' ? null : this.icon;
  }
}
