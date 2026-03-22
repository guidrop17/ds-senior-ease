import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type DividerOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'ui-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class DividerComponent {
  @Input() orientation: DividerOrientation = 'horizontal';
  @Input() ariaLabel = '';
}
