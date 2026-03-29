import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardButtonComponent, CardButtonVariant, CardButtonContext } from '../../atoms/card-button';
import { DividerComponent } from '../../atoms/divider';
import { IconValue } from '../../atoms/icon';
import { TemplateRef } from '@angular/core';

export type CardButtonGroupDividerStrategy = 'line' | 'custom';

export interface CardButtonGroupItem {
  title: string;
  description?: string | TemplateRef<any>;
  leading?: IconValue | TemplateRef<any>;
  useLeadingIcon?: boolean;
  trailing?: IconValue | TemplateRef<any>;
  useTrailingIcon?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  onClick?: () => void;
}

@Component({
  selector: 'ui-card-button-group',
  standalone: true,
  imports: [CommonModule, CardButtonComponent, DividerComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CardButtonGroupComponent {
  @Input() items: CardButtonGroupItem[] = [];
  @Input() dividerStrategy: CardButtonGroupDividerStrategy = 'line';
  @Input() variant: CardButtonVariant = 'ghost';
  @Input() context: CardButtonContext = 'primary';

  handleButtonClick(item: CardButtonGroupItem): void {
    item.onClick?.();
  }
}


