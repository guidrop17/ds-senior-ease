import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type AvatarSize = 'sm' | 'md' | 'lg';
export type AvatarTone = 'primary' | 'accent' | 'neutral';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class AvatarComponent {
  @Input() initials = 'SE';
  @Input() size: AvatarSize = 'md';
  @Input() tone: AvatarTone = 'primary';
  @Input() ariaLabel = '';
}
