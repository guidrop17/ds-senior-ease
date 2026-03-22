import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ButtonComponent {
  @Input() label = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Input() ariaPressed: boolean | null = null;
  @Input() ariaExpanded: boolean | null = null;
  @Input() ariaControls = '';
  @Input() ariaDescribedBy = '';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  protected emitClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
