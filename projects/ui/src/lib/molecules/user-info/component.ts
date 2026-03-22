import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent, AvatarSize, TextComponent } from '../../atoms';

@Component({
  selector: 'ui-user-info',
  standalone: true,
  imports: [CommonModule, AvatarComponent, TextComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class UserInfoComponent {
  @Input() name = '';
  @Input() role = '';
  @Input() initials = 'SE';
  @Input() size: AvatarSize = 'md';
  @Input() ariaLabel = '';
}
