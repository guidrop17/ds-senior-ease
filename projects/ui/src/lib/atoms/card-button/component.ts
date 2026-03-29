import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconComponent, IconName, IconValue } from '../icon';

@Component({
  selector: 'ui-card-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CardButtonComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() leadingIcon: IconValue | null = null;
  @Input() trailingIcon: IconValue | null = null;
  @Input() iconContainerClass: string | string[] | Record<string, boolean> = '';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel = '';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  protected resolveIconName(icon: IconValue | null): IconName {
    return typeof icon === 'string' ? icon : 'home';
  }

  protected resolveIconDefinition(icon: IconValue | null): IconDefinition | null {
    return typeof icon === 'string' || icon === null ? null : icon;
  }

  protected emitClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
