import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CdBackComponent } from '../shared/cd-back/cd-back.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CdBackComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('MS Portfolio | Page Not Found 😥')
  }
}
