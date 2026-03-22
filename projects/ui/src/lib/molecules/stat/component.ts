import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms';

export type StatTone = 'primary' | 'success' | 'warning';

export interface StatItem {
  label: string;
  value: string;
  description?: string;
  tone?: StatTone;
}

@Component({
  selector: 'ui-stat',
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class StatComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() description = '';
  @Input() tone: StatTone = 'primary';
}
