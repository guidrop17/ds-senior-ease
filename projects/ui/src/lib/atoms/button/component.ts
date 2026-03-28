import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonContext = 'primary' | 'secondary';
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
  @Input() context: ButtonContext = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() fullWidth = false;
  @Input() fullHeight = false;
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Input() ariaPressed: boolean | null = null;
  @Input() ariaExpanded: boolean | null = null;
  @Input() ariaControls = '';
  @Input() ariaDescribedBy = '';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  @HostBinding('class.ui-button-host--full-width')
  protected get isFullWidthHost(): boolean {
    return this.fullWidth;
  }

  @HostBinding('class.ui-button-host--full-height')
  protected get isFullHeightHost(): boolean {
    return this.fullHeight;
  }

  protected emitClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
