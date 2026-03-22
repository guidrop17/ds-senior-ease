import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatComponent, StatItem } from '../../molecules';

@Component({
  selector: 'ui-stats-grid',
  standalone: true,
  imports: [CommonModule, StatComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class StatsGridComponent {
  @Input() items: StatItem[] = [];
}
