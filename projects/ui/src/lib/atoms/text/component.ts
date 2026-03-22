import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type TextElement = 'span' | 'p' | 'h1' | 'h2' | 'h3';
export type TextTone = 'default' | 'muted' | 'primary';
export type TextWeight = 'regular' | 'medium' | 'semibold';
export type TextSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ui-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class TextComponent {
  @Input() element: TextElement = 'span';
  @Input() tone: TextTone = 'default';
  @Input() weight: TextWeight = 'regular';
  @Input() size: TextSize = 'md';
}
