import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { DividerComponent, IconComponent, IconName, TextComponent } from '../../atoms';
import { NavItemComponent, NavItemData, UserInfoComponent } from '../../molecules';

@Component({
  selector: 'ui-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    DividerComponent,
    IconComponent,
    NavItemComponent,
    TextComponent,
    UserInfoComponent,
  ],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class SidebarComponent {
  @Input() brand = 'Senior Ease';
  @Input() subtitle = 'Design System';
  @Input() userName = '';
  @Input() userRole = '';
  @Input() userInitials = 'SE';
  @Input() items: NavItemData[] = [];
  @Input() navAriaLabel = 'Navegacao principal';
  @Input() mobileNavAriaLabel = 'Navegacao inferior';

  protected iconName(item: NavItemData): IconName {
    return typeof item.icon === 'string' ? item.icon : 'home';
  }

  protected iconDefinition(item: NavItemData): IconDefinition | null {
    return typeof item.icon === 'string' || !item.icon ? null : item.icon;
  }
}
