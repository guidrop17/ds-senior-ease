import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
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
  @Input() description: string | TemplateRef<any> = '';
  @Input() leading: IconValue | TemplateRef<any> | null = null;
  @Input() useLeadingIcon = false;
  @Input() trailing: IconValue | TemplateRef<any> | null = null;
  @Input() useTrailingIcon = false;
  @Input() iconContainerClass: string | string[] | Record<string, boolean> = '';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel = '';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  protected isTemplate(value: any): boolean {
    return value instanceof TemplateRef;
  }

  protected resolveIconName(icon: IconValue | TemplateRef<any> | null): IconName {
    return typeof icon === 'string' ? icon : 'home';
  }

  protected resolveIconDefinition(icon: IconValue | TemplateRef<any> | null): IconDefinition | null {
    return typeof icon === 'string' || icon === null ? null : icon instanceof TemplateRef ? null : (icon as IconDefinition);
  }

  protected emitClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
