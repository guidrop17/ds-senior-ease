import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DividerComponent, TextComponent } from '../../atoms';
import { ListItemComponent, ListItemData } from '../../molecules';

@Component({
  selector: 'ui-agenda-list',
  standalone: true,
  imports: [CommonModule, DividerComponent, ListItemComponent, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class AgendaListComponent {
  @Input() title = 'Agenda do dia';
  @Input() items: ListItemData[] = [];
}
