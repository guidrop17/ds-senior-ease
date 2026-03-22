import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DividerComponent, TextComponent } from '../../atoms';
import { ListItemComponent, ListItemData } from '../../molecules';

@Component({
  selector: 'ui-materials-list',
  standalone: true,
  imports: [CommonModule, DividerComponent, ListItemComponent, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class MaterialsListComponent {
  @Input() title = 'Materiais recomendados';
  @Input() items: ListItemData[] = [];
}
