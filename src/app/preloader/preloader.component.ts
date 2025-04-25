import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css'],
  standalone: true
})
export class PreloaderComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() fullScreen: boolean = true;
  @Input() message: string = 'Loading...';

  get scale(): string {
    switch (this.size) {
      case 'small': return 'scale(0.1)';
      case 'large': return 'scale(0.3)';
      default: return 'scale(0.2)';
    }
  }
}
